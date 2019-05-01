import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../services/user.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { JiraService } from '../services/jira.service';
import { TimetrackService } from '../services/timetrack.service';
import { Project } from '../interfaces/Project';
import * as moment from 'moment';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit ,OnDestroy{

  private token: string;
  private statuses = [];
  private showError = false;
  private error: string = "";
  loader;
  private inProgressId;
  private inProgressTime;

  constructor(private userService: UserService, private jira: JiraService, private timeService: TimetrackService) { 

  }

  ngOnInit() {
    this.getJiraIssues();
  }

  getJiraIssues(){
    this.loader = true;
    this.jira.getIssueTransitions().then((data: any) => {
      this.statuses = data.statuses;
      this.loader = false;
      this.updateTimeForIssues();
    });
  }

  updateTimeForIssues(){
    
  }
  needToken(): boolean {
    return !this.userService.hasApiToken();
  }

  getUsername() {
    return this.userService.getUsername();
  }

  setToken() {
    console.log(this.token);
  }
  showErrorAnimation(){
    this.showError = true;
    setTimeout(()=>{
      this.showError = false;
    },4000);
  }

  /**
   * Handles time start for project
   * @param project
   */
  handleTaskStart(project: Project) {
    this.inProgressId = project.id;
    this.inProgressTime = "00:00:00";
    this.timeService.timeUpdate.subscribe((time) => {
      this.inProgressTime = time;
    });

    this.timeService.startTimer(project);
  }

  drop(event: CdkDragDrop<any>) {
    console.log(this.statuses);
    if (event.container.element.nativeElement.attributes['data-name'].nodeValue === 'In Progress') {
      
/*       if (this.statuses[1].issues.length > 0) {
        this.error = "You cannot have more than two tasks in progress at time."
        this.showErrorAnimation();
        return;
      } */

      let attributes = event.item.element.nativeElement.attributes;

      this.handleTaskStart({
        id: Number(event.item.element.nativeElement.id),
        name: attributes['data-name'].nodeValue,
        description: attributes['data-description'].nodeValue,
        summary: attributes['data-summary'].nodeValue
      });


    }

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
    let issueId = event.item.element.nativeElement.id;
    let transitionId = event.container.element.nativeElement.id;
    this.jira.updateTransition(+issueId, +transitionId);
  }

  ngOnDestroy(){
    this.timeService.updateHarvestTime();
  }
}
