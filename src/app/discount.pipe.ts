import { PizzaService } from './core/pizza.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  constructor(private pizzaService: PizzaService) { }

  transform(value: number): number {
    return value * (1 - this.pizzaService.priceDiscount);
  }


}
