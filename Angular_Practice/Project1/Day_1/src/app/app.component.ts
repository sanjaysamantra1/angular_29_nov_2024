import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { CategoriesComponent } from "./components/categories/categories.component";
import { CarouselComponent } from "./components/carousel/carousel.component";
import { BodyComponent } from "./components/body/body.component";
import { FooterComponent } from "./components/footer/footer.component";
import { EmployeeComponent } from "./components/employee/employee.component";
import { ProductsComponent } from "./components/products/products.component";
import { EmployeecrudComponent } from "./components/employeecrud/employeecrud.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, CategoriesComponent, CarouselComponent, BodyComponent, FooterComponent, EmployeeComponent, ProductsComponent, EmployeecrudComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Day_1';
}
