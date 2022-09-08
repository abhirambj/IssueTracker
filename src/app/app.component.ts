import { Component, OnInit } from '@angular/core';
import { IssueServiceService } from './issue-service.service';
import {
  IssueModel,
  issueAssigneeModel,
  issueCreatedByModel,
  issueUpdatedByModel,
} from './issue.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public issues: Array<IssueModel> = [];
  public issueAssignee: Array<issueAssigneeModel> = [];
  public issueCreated: Array<issueCreatedByModel> = [];
  public issueUpdated: Array<issueUpdatedByModel> = [];

  constructor(private issueService: IssueServiceService) {}

  ngOnInit(): void {
    this.getIssueWithId();
  }

  getIssueWithId() {
    this.issueService.getIssueWithId().subscribe((res) => {
      this.issues = res;
      console.log(res);
    });
  }
}
