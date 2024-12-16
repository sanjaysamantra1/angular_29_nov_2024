import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { DatabindingComponent } from './components/assignment/assignment.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent,CategoriesComponent,CarouselComponent,BodyComponent,FooterComponent,DatabindingComponent
  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';
}
