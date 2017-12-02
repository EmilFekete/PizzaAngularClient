import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { FormsModule, NgModel } from '@angular/forms';

import { AngularFireDatabase, } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';

interface Post {
  title: string;
  content: string;
}

interface PostId extends Post {
  id: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: Observable<firebase.User>;
  items: AngularFirestoreCollection<any[]>;
  msgVal: string = '';

  userEmail: string;

  postsCol: AngularFirestoreCollection<Post>;
  posts: any;
  title: string;
  content: string;
  postDoc: AngularFirestoreDocument<Post>;
  post: Observable<Post>;
  constructor(private firestore: AngularFirestore, public afAuth: AngularFireAuth) {
    this.user = this.afAuth.authState;
  }

  public ngOnInit(): void {
    this.postsCol = this.firestore.collection('posts');
    this.posts = this.postsCol.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Post;
          const id = a.payload.doc.id;
          return { id, data };
        });
      });
    this.user.subscribe(data => {
      if (data != null) {
        this.userEmail = data.email;
      } else {
        this.userEmail = null;
      }
    })
  }

  addPost() {
    this.firestore.collection('posts').add({ 'title': this.title, 'content': this.content });
  }

  getPost(postId) {
    this.postDoc = this.firestore.doc('posts/' + postId);
    this.post = this.postDoc.valueChanges();
  }

  deletePost(postId) {
    this.firestore.doc('posts/' + postId).delete();
  }


  login() {

  }

  onLogOut() {
    this.afAuth.auth.signOut().then(
      (success) => {
        console.log("succes! ");
        console.log(success);
      }
    ).catch(
      (err) => {
        console.log("Error! ");
        console.log(err);
      }
      );
  }

  Send(desc: string) {
    this.items.add([{ message: desc }]);
    this.msgVal = '';
  }


  onSubmit(formData) {
    if (formData.valid) {
      console.log(formData.value);
      this.afAuth.auth.createUserWithEmailAndPassword(formData.value.email,
        formData.value.password).then(
        (success) => {
          console.log("succes! ");
          console.log(success);
        }
        ).catch(
        (err) => {
          console.log("Error! ");
          console.log(err);
        }
        );
    }
  }


  onLogin(formData) {
    if (formData.valid) {
      console.log(formData.value);
      this.afAuth.auth.signInWithEmailAndPassword(formData.value.email,
        formData.value.password).then(
        (success) => {
          console.log("succes! ");
          console.log(success);
        }
        ).catch(
        (err) => {
          console.log("Error! ");
          console.log(err);
        }
        );

    }
  }
}
