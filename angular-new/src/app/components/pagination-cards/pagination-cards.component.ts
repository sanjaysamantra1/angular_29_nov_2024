import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination-cards',
  imports: [],
  templateUrl: './pagination-cards.component.html',
  styleUrl: './pagination-cards.component.css',
  inputs : ["items"]
})
export class PaginationCardsComponent {
  items : any;
}
