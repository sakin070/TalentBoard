import { Component, OnInit } from '@angular/core';
import {AfService} from "../../providers/af.service";
import {ToastrService} from "ngx-toastr";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent implements OnInit {

  constructor(private afService:AfService,private toastr:ToastrService) { }

  ngOnInit() {
    this.resetForm()
  }

  onSubmit(applicationForm:NgForm){

    this.afService.insertJob(applicationForm.value);
    this.resetForm(applicationForm);
    this.toastr.success('Submitted Succcessfully', 'Employee Register');

  }

  resetForm(applicationForm?: NgForm) {
    if (applicationForm != null)
      applicationForm.reset();
    this.afService.selectedApplicant = {
      id: null,
      name: '',
      email: '',
      phoneNumber: '',
      status: '',
      resumeURL:"",
      favouritedUserIds:"",
      assignedUserId:""

    }

  }

}
