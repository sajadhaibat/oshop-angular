import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    user$;
  constructor(private afAuth: AngularFireAuth ) {
    this.user$ = afAuth.authState;
  }
  login() {
      this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
      this.afAuth.auth.signOut();
  }
}
