import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { PaginationAssignmentComponent } from "./components/pagination-assignment/pagination-assignment.component";
import { HttpClientModule } from '@angular/common/http';
import { EmployeeCrudComponent } from "./components/assignments/employee-crud/employee-crud.component";

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    CategoriesComponent,
    CarouselComponent,
    BodyComponent,
    FooterComponent,
    PaginationAssignmentComponent,
    EmployeeCrudComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_project_nov_2024';
}
