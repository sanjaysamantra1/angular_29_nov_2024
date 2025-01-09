import { Component, Directive } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { AssignmentComponent } from './components/assignment/assignment.component';
import { Assignment2Component } from './assignment2/assignment2.component';
import { CustompipeComponent } from './custompipe/custompipe.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { ParentComponent } from './parent-child/parent/parent.component';
import { Child1Component } from './parent-child/child1/child1.component';
import { Child2Component } from './parent-child/child2/child2.component';
import { DirectivesComponent } from './directives/directives.component';
import { PaginationComponent } from "./pagination/pagination.component";
import { TrafficlightComponent } from "./trafficlight/trafficlight.component";
import { EmployeeComponent } from './employee/employee.component';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    CategoriesComponent,
    CarouselComponent,
    BodyComponent,
    FooterComponent,
    AssignmentComponent,
    Assignment2Component,
    CustompipeComponent,
    DatabindingComponent,
    ParentComponent,
    Child1Component,
    Child2Component,
    DirectivesComponent,
    PaginationComponent,
    TrafficlightComponent,
    EmployeeComponent,
],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular';

  
  lightmode :boolean= true; 



  toggleTheme():  void {
    this.lightmode = !this.lightmode;
  
  if(!this.lightmode){
  document.body.classList.add('lighttheme');
     document.body.classList.remove('darktheme');
     console.log("light");
     
  }else{
    document.body.classList.add('darktheme');
     document.body.classList.remove('lighttheme');
     console.log("dark");

}
  }



}
