import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'


@Injectable({
  providedIn: 'root'
})
export class AfService {
  user: Observable<firebase.User>;
  constructor(public afAuth : AngularFireAuth,private firebase:AngularFireDatabase) {
    this.user = afAuth.authState;
  }

  loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.auth.signInWithPopup(provider);
  }

  logout(){
    this.afAuth.auth.signOut();
  }

}
