import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireAuth, AUTH_PROVIDERS } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

export interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  favoriteColor?: string;
}
@Injectable()
export class AuthService {

  user: Observable<User>;
  error: any;

  constructor(private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router) {
    //// Get auth data, then get firestore user document || null
    this.user = this.afAuth.authState
      .switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
        } else {
          return Observable.of(null)
        }
      });
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.updateUserData(credential.user)
      }).then(
      (success) => {
        this.router.navigate(['']);
      });
  }
  private updateUserData(user) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    }
    return userRef.set(data)
  }
  signOut() {
    this.afAuth.auth.signOut();
  }


  register(email: string, password: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(
      (success) => {
        console.log("succes! ");
        console.log(success);
        this.router.navigate(['']);
        this.login(email, password)
      }
    ).catch(
      (err) => {
        console.log("Error! ");
        console.log(err);
      });
  }

  login(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password).then(
      (success) => {
        console.log("succes! ");
        console.log(success);
      }
    ).catch(
      (err) => {
        console.log("Error! ");
        console.log(err);
      });
  }
}