import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, CategoriesComponent, CarouselComponent, BodyComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_project_nov_2024';
  flag: boolean = true;

  toggleMode() {
    console.log("Button clicked");
    this.flag = !this.flag;
    console.log(this.flag);
    if (this.flag) {
      var ele =  document.body;
      console.log(ele);
      ele.classList.toggle("dark-mode");
    } else {
      console.log("light");
      document.body.classList.remove('dark');
    }
  }

}
