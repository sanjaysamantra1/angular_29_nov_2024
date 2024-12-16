import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CarouselComponent } from "../carousel/carousel.component";
import { BodyComponent } from "../body/body.component";
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-categories',
  imports: [NavbarComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {

}
