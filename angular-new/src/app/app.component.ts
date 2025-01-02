import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { Demo2Component } from './components/demo2/demo2.component';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent, 
    CategoriesComponent, 
    CarouselComponent, 
    BodyComponent, 
    FooterComponent, 
    DatabindingComponent,
    DirectivesComponent,
    Demo2Component
   ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-new';
}
