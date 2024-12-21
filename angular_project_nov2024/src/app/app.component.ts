import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/body/body.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { EmployeeCRUDComponent } from './components/employee-crud/employee-crud.component';



@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent, 
    CategoriesComponent,
    CarouselComponent,
    BodyComponent,
    EmployeeComponent,
    ProductsListComponent,
    EmployeeCRUDComponent,
    FooterComponent
    
  ],
   
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_project_nov_2024';
  flag = false;
  toggle() {
    this.flag = !this.flag;
    if (this.flag) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }
}
/*
@Component({
  selector: 'app-root',
  template: `
    <h1>angular-dark-mode</h1>
    <p>Toggle to see magic happens!</p>
    <app-dark-mode-toggle></app-dark-mode-toggle>
  `,
})
export class AppComponent {}
*/