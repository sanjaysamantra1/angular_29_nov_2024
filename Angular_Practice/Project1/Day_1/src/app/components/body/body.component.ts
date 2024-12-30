import { Component } from '@angular/core';
import { DatabindingComponent } from "../databinding/databinding.component";
import { ProductsComponent } from "../products/products.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { DatabindingPracticeComponent } from "../databinding-practice/databinding-practice.component";

@Component({
  selector: 'app-body',
  imports: [DatabindingComponent, ProductsComponent, NavbarComponent, DatabindingPracticeComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
 

}
