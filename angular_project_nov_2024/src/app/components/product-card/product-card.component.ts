import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar, faPlane, faArrowDown19, faArrowUp91, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-card',
  imports: [FontAwesomeModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
  inputs: ['product']
})
export class ProductCardComponent {
  product: any;
  faStar: any = faStar;

}
