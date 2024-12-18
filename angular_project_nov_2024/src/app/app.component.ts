import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { EmployeesComponent } from './components/employee/employee.component';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    CategoriesComponent,
    CarouselComponent,
    BodyComponent,
    FooterComponent,
    EmployeesComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_project_nov_2024';

  flag = false;

  toggleMode() {
    this.flag = !this.flag;
    if (this.flag) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }
}
