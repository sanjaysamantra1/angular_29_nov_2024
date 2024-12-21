import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
//import { FooterComponent } from './components/footer/footer.component';
//import { BodyComponent } from './components/body/body.component';
//import { CarouselComponent } from './components/carousel/carousel.component';
//import { CategoriesComponent } from './components/categories/categories.component';
//import { EmployeeComponent } from './components/employee/employee.component';
//import { ProductsListComponent } from './components/products-list/products-list.component';
//import { CrudopsComponent } from './components/crudops/crudops.component';
import { ParentCrudopsComponent } from './components/parent-crudops/parent-crudops.component';
import { PipescomponentComponent } from './components/pipescomponent/pipescomponent.component';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    PipescomponentComponent,
    //CrudopsComponent,
    ParentCrudopsComponent
  ],
  //EmployeeComponent,
  //ProductsListComponent,
    //CategoriesComponent,
    //CarouselComponent,
    //BodyComponent,
    //FooterComponent
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_project_nov_2024';
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