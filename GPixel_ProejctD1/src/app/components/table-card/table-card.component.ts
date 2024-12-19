import { Component } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-table-card',
  standalone: true,
  imports: [NgxPaginationModule],
  templateUrl: './table-card.component.html',
  styleUrl: './table-card.component.css'
})
export class TableCardComponent {
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
    name: 'Rahul Gandhi',
    sal: 2000,
    gender:'Male'
  },
  {
    employeeId:'001',
    name: 'Indhira Gandhi',
    sal: 2000,
    gender:'Female'

  },
  {
    employeeId:'002',
    name: 'Sanjay Gandhi',
    sal: 2000,
    gender:'Male'
  },
  {
    employeeId:'003',
    name: 'Rajiv Gandhi',
    sal: 2000,
    gender:'Male'

  },
  {
    employeeId:'004',
    name: 'P.V.N.Rao',
    sal: 2000,
    gender:'Male'
  },
  {
    employeeId:'005',
    name: 'Sonia Gandhi',
    sal: 2000,
    gender:'Female'

  },
  {
    employeeId:'006',
    name: 'Manmohan Singh',
    sal: 2000,
    gender:'Male'
  },
  {
    employeeId:'007',
    name: 'Digvijay Singh',
    sal: 2000,
    gender:'Male'

  },
  {
    employeeId:'000',
    name: 'M.D.K.C. Gandhi',
    sal: 2000,
    gender:'Male'
  },
  {
    employeeId:'008',
    name: 'Pratibha patil',
    sal: 2000,
    gender:'Female'

  },
  {
    employeeId:'009',
    name: 'Mulayam Singh Yadav',
    sal: 2000,
    gender:'Male'
  },
  {
    employeeId:'010',
    name: 'Sashi Tharoor',
    sal: 2000,
    gender:'Male'

  },
  {
    employeeId:'101',
    name: 'Priayanka Gandhi',
    sal: 2000,
    gender:'Female'

  }
]

}
