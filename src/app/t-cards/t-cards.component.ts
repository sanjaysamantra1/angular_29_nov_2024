import { Component } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';

@Component({
  selector: 'app-t-cards',
  imports: [NgxPaginationModule],
  templateUrl: './t-cards.component.html',
  styleUrl: './t-cards.component.css'
})
export class TCardsComponent {
  pageNumber : any;
  itemsPerPage : number = 3;
  currentPage : number = 0;
  viewToggle : boolean = false;
   changeView() : void{
    this.viewToggle=!this.viewToggle;
  }
Employees: any=[
  {
    employeeId:'100',
    name: 'Sagar Gandhi',
    sal: 2000,
    gender:'Male'
  },
  {
    employeeId:'001',
    name: 'Sagar Patel',
    sal: 2000,
    gender:'Female'

  },
  {
    employeeId:'002',
    name: 'Sagar Naidu',
    sal: 2000,
    gender:'Male'
  },
  {
    employeeId:'003',
    name: 'Sagar Reddy',
    sal: 2000,
    gender:'Male'

  },
  {
    employeeId:'004',
    name: 'Sagar Modi',
    sal: 2000,
    gender:'Male'
  },
  {
    employeeId:'005',
    name: 'Sagar Bhai',
    sal: 2000,
    gender:'Female'

  },
  {
    employeeId:'006',
    name: 'Sagar Singh',
    sal: 2000,
    gender:'Male'
  },
  {
    employeeId:'007',
    name: 'Sagar Star',
    sal: 2000,
    gender:'Male'

  },
  {
    employeeId:'000',
    name: 'Sagar Kalam',
    sal: 2000,
    gender:'Male'
  },
  {
    employeeId:'008',
    name: 'Sagar Patil',
    sal: 2000,
    gender:'Female'

  },
  {
    employeeId:'009',
    name: 'Sagar Yadav',
    sal: 2000,
    gender:'Male'
  },
  {
    employeeId:'010',
    name: 'Sagar Tharoor',
    sal: 2000,
    gender:'Male'

  },
  {
    employeeId:'101',
    name: 'Sagar Naik',
    sal: 2000,
    gender:'Female'

  }
]
}
