import { Component, OnInit } from '@angular/core';



import {NgForm} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {AfService} from "../../providers/af.service";

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.css'],
  providers:[AfService]
})
export class JobFormComponent implements OnInit {

  constructor(private afService:AfService,private toastr:ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(jobForm:NgForm){
    this.toastr.success('Submitted Succcessfully', 'Employee Register');
    this.afService.insertJob(jobForm.value);
    this.resetForm(jobForm);

  }
  resetForm(jobForm?: NgForm) {
    if (jobForm != null)
      jobForm.reset();
    this.afService.selectedJob = {
      id: null,
      title: '',
      location: '',
      description: '',
      salary: '',
      applicantIds:"",
      // isOpen:true
      }

  }


}
