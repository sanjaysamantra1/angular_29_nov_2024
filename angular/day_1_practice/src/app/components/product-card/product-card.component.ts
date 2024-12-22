import { Component, input } from '@angular/core';

@Component({
    selector: 'app-product-card',
    imports: [],
    templateUrl: './product-card.component.html',
    styleUrl: './product-card.component.css',
    inputs: ['productData'],
})
export class ProductCardComponent {
    productData: any;
}
