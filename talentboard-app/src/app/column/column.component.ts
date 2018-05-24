import { Component, OnInit, Input } from '@angular/core';
import { Applicant } from '../model/applicant';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {

  @Input() name: string;
  @Input() applicants: Array<Applicant>;

  constructor() { }

  ngOnInit() {
  }

}
