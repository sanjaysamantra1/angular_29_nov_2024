import { Component } from '@angular/core';

@Component({
  selector: 'app-productslist',
  imports: [],
  templateUrl: './productslist.component.html',
  styleUrl: './productslist.component.css',
  inputs:['mylist']
})
export class ProductslistComponent {
mylist :any;
}
