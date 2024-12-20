import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { Demo1Component } from './components/demo1/demo1.component';
import { EmployeeAssignmentComponent } from './components/employee-assignment/employee-assignment.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, CategoriesComponent, CarouselComponent, BodyComponent, FooterComponent, DatabindingComponent, DirectivesComponent, Demo1Component, EmployeeAssignmentComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-new';
}
