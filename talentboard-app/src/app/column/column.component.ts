import { Component, OnInit, Input } from '@angular/core';
import { Applicant } from '../model/applicant';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {

  @Input() name: string;
  @Input() applicants: Array<Applicant> = [];

  constructor() { }

  ngOnInit() {
   this.sortItems();
  }

  removeItem(e: any) {
    const applicant: Applicant = e.dragData;
    const index = this.applicants.map((value: Applicant) => {
      return value.fullName;
    }).indexOf(applicant.fullName);
    if (index !== -1) {
      this.applicants.splice(index, 1);
    }
  }

  addItem(e: any) {
    const applicant: Applicant = e.dragData;
    this.applicants.push(applicant);
  }

  sortItems() {
    this.applicants.sort((a: Applicant, b: Applicant) => {
      return a.fullName.localeCompare(b.fullName);
    });
  }
}
