import { Component, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CategoryComponent } from './components/category/category.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { Demo1Component } from './components/demo1/demo1.component';
import { ProductListComponent } from './components/product-list/product-list.component';

@Component({
  selector: 'app-root', // will give in index.html
  imports: [RouterOutlet,NavbarComponent,CategoryComponent,CarouselComponent,BodyComponent,FooterComponent,Demo1Component, ProductListComponent],
  templateUrl: './app.component.html', //passess this html and css to that index.html in body
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'angular';
  isDarkMode = false; // Global theme state

  constructor(private renderer: Renderer2) {}

  // Method to toggle the theme
  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;


    this.renderer.removeClass(document.body, 'light-theme');
    this.renderer.removeClass(document.body, 'dark-theme');

    
    if (this.isDarkMode) {
      this.renderer.addClass(document.body, 'dark-theme');
      this.renderer.removeClass(document.body, 'light-theme');
    } else {
      this.renderer.addClass(document.body, 'light-theme');
      this.renderer.removeClass(document.body, 'dark-theme');
    }
     }
  
}
