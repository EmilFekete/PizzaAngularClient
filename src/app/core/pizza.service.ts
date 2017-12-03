import { Observable } from 'rxjs/Rx';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

export interface Pizza {
  title: string;
  description: string;
  id: string;
  price: number;
  image: string;
}

@Injectable()
export class PizzaService {

  items: AngularFirestoreCollection<any[]>;
  msgVal: string = '';

  pizzasCol: AngularFirestoreCollection<Pizza>;
  pizzas: any;
  pizzaDoc: AngularFirestoreDocument<Pizza>;
  pizza: Observable<Pizza>;
  constructor(
    private firestore: AngularFirestore,
    public afAuth: AngularFireAuth) {
  }

  public ngOnInit(): void {
    this.pizzasCol = this.firestore.collection('pizzas');
    this.pizzas = this.pizzasCol.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Pizza;
          const id = a.payload.doc.id;
          return { id, data };
        });
      });
  }

  getPizza(pizzaId) {
    this.pizzaDoc = this.firestore.doc('pizzas/' + pizzaId);
    this.pizza = this.pizzaDoc.valueChanges();
  }

  Send(desc: string) {
    this.items.add([{ message: desc }]);
    this.msgVal = '';
  }


}
