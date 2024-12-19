import { Component } from '@angular/core';
import { DatabindingComponent } from "../databinding/databinding.component";
import { ProductsComponent } from "../products/products.component";

@Component({
  selector: 'app-body',
  imports: [DatabindingComponent, ProductsComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
 

}
