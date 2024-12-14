import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './compoents/navbar/navbar.component';
import { CategoryComponent } from './compoents/category/category.component';
import { CarouselComponent } from './compoents/carousel/carousel.component';
import { BodyComponent } from './compoents/body/body.component';
import { FooterComponent } from './compoents/footer/footer.component';

@Component({
  selector: 'app-root', // will give in index.html
  imports: [NavbarComponent,CategoryComponent,CarouselComponent,BodyComponent,FooterComponent],
  templateUrl: './app.component.html', //passess this html and css to that index.html in body
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';
}
