import { Component, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CategoryComponent } from './components/category/category.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { Demo1Component } from './components/product_list/demo1.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoaderComponent } from './components/loader/loader.component';
import { CartComponent } from './components/cart/cart.component';

@Component({
  selector: 'app-root', // will give in index.html
  imports: [RouterOutlet,NavbarComponent,CategoryComponent,CarouselComponent,BodyComponent,FooterComponent,FormsModule,NgxPaginationModule,LoaderComponent,CartComponent],
  templateUrl: './app.component.html', //passess this html and css to that index.html in body
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';
  isDark = true; // Global theme state

  toggleTheme(): void{
    this.isDark=!this.isDark;


    if(this.isDark){
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    }
    else{
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }
  }


  
}
