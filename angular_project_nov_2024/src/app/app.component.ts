import { Component, Renderer2, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { BodyComponent } from './components/body/body.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { FooterComponent } from './components/footer/footer.component';
import { PaginationAssignmentComponent } from "./components/pagination-assignment-component/pagination-assignment-component.component";
import { EmployeeCrudComponent } from "./components/employee-crud/employee-crud.component";
import { PipesComponent } from "./components/pipes/pipes.component";
import { DOCUMENT } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';


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
    PipesComponent,
    RouterOutlet,
    FormsModule
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'angular_project_nov_2024';
  isDarkTheme = false;

  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    this.updateTheme();
  }


  private updateTheme(): void {
    if (this.isDarkTheme) {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
    }
  }
}
