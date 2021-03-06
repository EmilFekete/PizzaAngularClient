import { PizzaService, Pizza } from '../core/pizza.service';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { DiscountPipe } from '../discount.pipe'
@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {

  constructor(public pizzaService: PizzaService) {
  }

  public ngOnInit(): void {
  }
}
