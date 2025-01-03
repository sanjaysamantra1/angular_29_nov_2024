import { Component } from '@angular/core';
import { PaginationAssignmentComponent } from '../pagination-assignment-component/pagination-assignment-component.component';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
  inputs:["product"]
})
export class ProductCardComponent {
  product :any;

}
