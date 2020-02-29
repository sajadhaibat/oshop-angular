import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input('proudct') product: Product;
  @Input('show-actions') showActions = true;

  constructor() { }

}
