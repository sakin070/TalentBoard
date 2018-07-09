import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import {Applicant} from "../model/Applicant";
import {Job} from "../model/Job";
import {User} from "../model/User";

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'


@Injectable({
  providedIn: 'root'
})
export class AfService {
  user: Observable<firebase.User>;



  applicantList:AngularFireList<any>;
  selectedApplicant:Applicant;
  userList:AngularFireList<any>;
  jobList:AngularFireList<any>;
  selectedJob:Job;

  constructor(public afAuth : AngularFireAuth,private firebase:AngularFireDatabase) {
    this.user = afAuth.authState;
    this.userList = this.firebase.list("User");
    this.jobList = this.firebase.list("Job");
  }

  loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.auth.signInWithPopup(provider);
  }

  logout(){
    this.afAuth.auth.signOut();
  }





  getDataApplicants(){
    this.applicantList = this.firebase.list("Applicant");
    return this.applicantList;
  }

  insertApplicant(applicant:Applicant){
    this.applicantList.push({
      name: applicant.name,
      email: applicant.email,
      phoneNumber: applicant.phoneNumber,
      status: applicant.status,
      resumeURL: applicant.resumeURL,
      favouritedUserIds: applicant.favouritedUserIds,
      assignedUserId: applicant.assignedUserId
    });

  }

  deleteApplicant($key:string){
    this.applicantList.remove($key);
  }


  getUsers(){
    this.userList = this.firebase.list("User");
    return this.userList;
  }

  insertUser(user:User) {
    this.userList.push({
      name: user.name,
      email: user.email,
      jobID: user.jobIds,
      profileURL: user.profileURL
    });
  }

  deleteUser($key:string){
    this.userList.remove($key);
  }


  getJobs(){
    this.jobList = this.firebase.list("Job");
    return this.jobList;
  }


  insertJob(job:Job) {
    this.jobList.push({
      title: job.title,
      description: job.description,
      location: job.location,
      salary: job.salary,
      applicantIds: job.applicantIds,
      // isOpen: job.isOpen,
    });
  }

  deleteJob($key:string){
    this.jobList.remove($key);
  }





}
