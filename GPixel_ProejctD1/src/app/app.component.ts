import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/body/body.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AssignmentsComponent } from "./components/assignments/assignments.component";
import { TableCardComponent } from "./components/table-card/table-card.component";
import { ProductsComponent } from './components/products/products.component';
import { CrudOpsComponent } from './components/crud-ops/crud-ops.component';
import { PipeTesterComponent } from "./components/pipe-tester/pipe-tester.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    //RouterOutlet,
    FooterComponent,
    BodyComponent,
    CarouselComponent,
    NavbarComponent,
    AssignmentsComponent,
    TableCardComponent,
    ProductsComponent,
    CrudOpsComponent, PipeTesterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project_Day1';
  
}
