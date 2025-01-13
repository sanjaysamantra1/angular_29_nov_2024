import { Component } from '@angular/core';
//import { NavbarComponent } from './components/navbar/navbar.component';
//import { FooterComponent } from './components/footer/footer.component';
//import { BodyComponent } from './components/body/body.component';
//import { CarouselComponent } from './components/carousel/carousel.component';
//import { CategoriesComponent } from './components/categories/categories.component';
//import { EmployeeComponent } from './components/employee/employee.component';
//import { ProductsListComponent } from './components/products-list/products-list.component';
//import { CrudopsComponent } from './components/crudops/crudops.component';
//import { ParentCrudopsComponent } from './components/parent-crudops/parent-crudops.component';
//import { ParentComponent } from './components/parent/parent.component';
//import { AssignmentsComponent } from './components/assignments/assignments.component';
import { UserCrudComponent } from './components/user-crud/user-crud.component';
import { LoadingComponent } from './components/loading/loading.component';
//import { PipescomponentComponent } from './components/pipescomponent/pipescomponent.component';

@Component({
  selector: 'app-root',
  imports: [//AssignmentsComponent,
    //ParentComponent
    //NavbarComponent,
    
    //PipescomponentComponent,
    //CrudopsComponent,
    //ParentCrudopsComponent,
    //EmployeeComponent,
    LoadingComponent,
    UserCrudComponent
  ],
  //
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