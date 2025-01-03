import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list-card',
  imports: [],
  templateUrl: './product-list-card.component.html',
  styleUrl: './product-list-card.component.css',
  inputs:["product"]
})
export class ProductListCardComponent {
  product : any;
}
