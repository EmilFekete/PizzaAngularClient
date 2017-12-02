import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { FormsModule, NgModel } from '@angular/forms';

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
  postsCol: AngularFirestoreCollection<Post>;
  posts: any;
  title: string;
  content: string;
  postDoc: AngularFirestoreDocument<Post>;
  post: Observable<Post>;

  constructor(private firestore: AngularFirestore) {

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
}
