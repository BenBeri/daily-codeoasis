import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JiraService {

  transitionsChange: Subject<any> = new Subject<any>();

  constructor(private http: HttpClient) { }

  getIssueTransitions(): Promise<any> {
    return this.http.get("http://localhost:3001/api/jira/transitions").toPromise();
  }

  updateTransition(issueId: number, transitionId: number) {
    console.log("test");
    this.http.post("http://localhost:3001/api/jira/transitions/update", {issueId: issueId, transitionId: transitionId}).subscribe((data: any) => {
      console.log(data);
    });
  }
}
