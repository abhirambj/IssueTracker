export interface IssueModel {
  id: string;
  summary: string;
  type: number;
  projectID: string;
  description: string;
  priority: number;
  assignee: issueAssigneeModel;
  tags: Array<string>;
  sprint: string;
  storyPoint: number;
  status: number;
  createdBy: issueCreatedByModel;
  createdOn: string;
  updatedBy: issueUpdatedByModel;
  updatedOn: string;
}

export interface issueAssigneeModel {
  id: string;
  name: string;
  email: string;
  teamName: string;
  desination: string;
}

export interface issueCreatedByModel {
  id: string;
  name: string;
  email: string;
  teamName: string;
  desination: string;
}

export interface issueUpdatedByModel {
  id: string;
  name: string;
  email: string;
  teamName: string;
  desination: string;
}
