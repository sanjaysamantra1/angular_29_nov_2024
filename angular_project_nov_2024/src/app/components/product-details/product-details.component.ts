import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  product: any;
  constructor(private activatedRoute: ActivatedRoute) {
  }
  
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(MyQueryParams => {
      console.log(MyQueryParams);
      this.product = MyQueryParams;
    });
  }

}
