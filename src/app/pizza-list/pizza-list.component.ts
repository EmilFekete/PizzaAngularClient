import { PizzaService, Pizza } from '../core/pizza.service';
import { AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {
  pizzas: Observable<Pizza>

  constructor(private pizzaService: PizzaService) {
    this.pizzas = pizzaService.pizzas;
  }

  public ngOnInit(): void {
  }
}
