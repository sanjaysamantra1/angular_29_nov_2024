import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CategoryComponent } from './components/category/category.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/body/body.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { DirectivesComponent } from './directives/directives.component';
import { TCardsComponent } from './t-cards/t-cards.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeCRUDComponent } from './employee-crud/employee-crud.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { EmpcrudassignmentComponent } from './components/empcrudassignment/empcrudassignment.component';


@Component({
  selector: 'app-root',
  
  imports: [FormsModule,EmployeeCRUDComponent,CustomPipeComponent,EmpcrudassignmentComponent,
    RouterOutlet,
    NavbarComponent,
    CategoryComponent,
    CarouselComponent,ProductListComponent, FooterComponent, BodyComponent, DatabindingComponent, DirectivesComponent, TCardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_project';
  darkMode : boolean =false;

  toggleMode() : void {
    this.darkMode = !this.darkMode;
    if(this.darkMode )
    {
      document.body.classList.add('isDarkMode');
      document.body.classList.remove('isNotDarkMode');
    }
    else
    {
      document.body.classList.add('isNotDarkMode');
      document.body.classList.remove('isDarkMode');
    }
  }


  
}
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';

// import { AppComponent } from './app.component';
// import { NavbarComponent } from './components/navbar/navbar.component';
// import { CategoryComponent } from './components/category/category.component';
// import { CarouselComponent } from './components/carousel/carousel.component';
// import { FooterComponent } from './components/footer/footer.component';
// import { BodyComponent } from './components/body/body.component';
// import { DatabindingComponent } from './components/databinding/databinding.component';
// import { DirectivesComponent } from './directives/directives.component';
// import { TCardsComponent } from './t-cards/t-cards.component';
// import { ProductListComponent } from './product-list/product-list.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     NavbarComponent,
//     CategoryComponent,
//     CarouselComponent,
//     FooterComponent,
//     BodyComponent,
//     DatabindingComponent,
//     DirectivesComponent,
//     TCardsComponent,
//     ProductListComponent
//   ],
//   imports: [
//     BrowserModule,
//     FormsModule,
//     RouterModule // Include this if you're using routing
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

