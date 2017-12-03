import { PizzaService } from './core/pizza.service';
import { Directive, ElementRef, Renderer2 } from '@angular/core';
@Directive({
  selector: '[appDiscountToolTip]'
})
export class DiscountToolTipDirective {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private pizzaService: PizzaService
  ) {
    this.renderer.setAttribute(this.el.nativeElement, 'data-toggle', 'tooltip');
    this.renderer.setAttribute(this.el.nativeElement, 'title', `Personal discount: ${pizzaService.priceDiscount}`);
  }
}
