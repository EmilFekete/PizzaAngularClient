import { PizzaService } from '../core/pizza.service';
import { AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {

  constructor(private pizzaService: PizzaService) {

  }

  public ngOnInit(): void {
  }
}
