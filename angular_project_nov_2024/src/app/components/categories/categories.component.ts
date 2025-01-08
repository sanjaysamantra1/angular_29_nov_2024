import { Component, ViewChildren } from '@angular/core';
import { CategoryCardComponent } from '../category-card/category-card.component';

@Component({
  selector: 'app-categories',
  imports: [
    CategoryCardComponent
  ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  allCategories = [
    { label: 'Grocery', img_url: 'https://rukminim2.flixcart.com/flap/72/72/image/29327f40e9c4d26b.png?q=100' },
    { label: 'Mobile', img_url: 'https://rukminim2.flixcart.com/flap/72/72/image/22fddf3c7da4c4f4.png?q=100' },
    { label: 'Fashion', img_url: 'https://rukminim2.flixcart.com/fk-p-flap/72/72/image/0d75b34f7d8fbcb3.png?q=100' },
    { label: 'Electronics', img_url: 'https://rukminim2.flixcart.com/flap/72/72/image/69c6589653afdb9a.png?q=100' },
    { label: 'Home & Furniture', img_url: 'https://rukminim2.flixcart.com/flap/72/72/image/ab7e2b022a4587dd.jpg?q=100' },
    { label: 'Appliances', img_url: 'https://rukminim2.flixcart.com/fk-p-flap/72/72/image/0139228b2f7eb413.jpg?q=100' },
    { label: 'Travel', img_url: 'https://rukminim2.flixcart.com/flap/72/72/image/71050627a56b4693.png?q=100' },
    { label: 'Beauty & Toys', img_url: 'https://rukminim2.flixcart.com/flap/72/72/image/dff3f7adcf3a90c6.png?q=100' },
    { label: 'Two Wheeler', img_url: 'https://rukminim2.flixcart.com/fk-p-flap/72/72/image/05d708653beff580.png?q=100' },
  ]

  @ViewChildren(CategoryCardComponent) categoryCards: any;

  ngAfterViewInit() {
    console.log(this.categoryCards)
  }
}
