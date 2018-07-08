import { Component } from '@angular/core';
import { Applicant } from './model/applicant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  applicants: Array<Applicant> = [
    new Applicant('Bob Smith', 'bob.smith@gmail.com', 'Applied'),
    new Applicant('Johnny Appleseed', 'johnny.seed@gmail.com', 'Applied'),
    new Applicant('Humby Jumby', 'humb.jumb@gmail.com', 'Applied'),
  ];
}
