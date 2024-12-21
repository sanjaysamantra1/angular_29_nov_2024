import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { BodyComponent } from './components/body/body.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { FooterComponent } from './components/footer/footer.component';
import { PaginationAssignmentComponent } from "./components/pagination-assignment-component/pagination-assignment-component.component";
import { EmployeeCrudComponent } from "./components/employee-crud/employee-crud.component";
import { PipesComponent } from "./components/pipes/pipes.component";


@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    CategoriesComponent,
    CarouselComponent,
    BodyComponent,
    DatabindingComponent,
    FooterComponent,
    PaginationAssignmentComponent,
    EmployeeCrudComponent,
    PipesComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_project_nov_2024';
}
