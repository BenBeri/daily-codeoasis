import { Injectable } from '@angular/core';
import * as moment from 'moment';
import {Project} from '../interfaces/Project';
import {Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TimetrackService {

  private timeInterval;
  private currentProject: Project;
  private startSeconds;
  private currentTime;
  public timeUpdate: Subject<string> = new Subject<string>();

  constructor() { }

  startTimer(project: Project, ) {
    this.currentProject = project;
    this.startSeconds = moment().unix();
    this.timeInterval = setInterval(() => {
      let difference = moment().unix() - this.startSeconds;
      let time = moment.utc(moment.duration(+difference,"s").asMilliseconds()).format("HH:mm:ss");
      this.currentTime = time;

    this.timeUpdate.next(time)
    }, 1000);
  }

  setTimerInStorage(project, time){
    localStorage.setItem(project, time);
  }
  getProjectTimeStamp(project){
    localStorage.getItem(project);
  }

  deleteFromStorage(project){
    localStorage.removeItem(project);
  }
  updateHarvestTime(){
    // TODO : update harvest time with takeong the current time in harvet(if not already)
  }
  stopTimer() {
    clearInterval(this.timeInterval);
  }
}
