import { Observable } from 'rxjs/Rx';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

interface Post {
  title: string;
  content: string;
}

interface PostId extends Post {
  id: string;
}

@Injectable()
export class PizzaService {

  items: AngularFirestoreCollection<any[]>;
  msgVal: string = '';

  userEmail: string;

  postsCol: AngularFirestoreCollection<Post>;
  posts: any;
  title: string;
  content: string;
  postDoc: AngularFirestoreDocument<Post>;
  post: Observable<Post>;
  constructor(
    private firestore: AngularFirestore,
    public afAuth: AngularFireAuth) {
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


}
