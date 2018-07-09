import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-job-view',
  templateUrl: './job-view.component.html',
  styleUrls: ['./job-view.component.css']
})
export class JobViewComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  newJob() {
    this.router.navigate(['./addjob']);
  }

}
