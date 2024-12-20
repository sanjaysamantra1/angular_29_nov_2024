import { Component } from '@angular/core';
import { DatabindingComponent } from "../databinding/databinding.component";
import { ProductsComponent } from "../products/products.component";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-body',
  imports: [DatabindingComponent, ProductsComponent, NavbarComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
 

}
