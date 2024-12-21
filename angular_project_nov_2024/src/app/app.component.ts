import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ProductsComponent } from './components/products/products.component';
import { EmployeeCRUDComponent } from './components/employee-crud/employee-crud.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    CategoriesComponent,
    CarouselComponent,
    BodyComponent,
    EmployeeComponent,
    ProductsComponent,
    FooterComponent,
    EmployeeCRUDComponent,
  ],
  template: `
    <app-navbar></app-navbar>
    <app-categories></app-categories>
    <app-carousel></app-carousel> 
    <app-body></app-body>
    <app-employee></app-employee>
    <app-products></app-products>
    <app-employee-crud></app-employee-crud>
    <app-footer></app-footer>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_project_nov_2024';
}