import {Injectable} from '@angular/core';

@Injectable()
export class RecentProjectsService {
  projects:any;

  constructor() {
    this.projects = [
      {
        "href": "/",
        "title": "Booking Created for Successfully-BKNGNSASIN190531"
      },
      {
        "href": "/",
        "title": "Action Pending for Rate Request-RRAGNNSA190531"
      },
      {
        "href": "/",
        "title": "Vessel Load activity done for CRXU5432169"
      }
    ]

  }

  getProjects() {
    return this.projects
  }

  clearProjects() {
    this.projects = []
  }

}
