import { Observable } from 'rxjs/Rx';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs/add/operator/map';

export interface Pizza {
  title: string;
  description: string;
  price: number;
  image: string;
}

@Injectable()
export class PizzaService {

  pizzasCol: AngularFirestoreCollection<Pizza>;
  pizzas: Observable<Pizza[]>;

  constructor(private firestore: AngularFirestore) {
    this.pizzasCol = this.firestore.collection('pizzas');
    this.pizzas = this.pizzasCol.valueChanges();
  }



}
