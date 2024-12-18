import { Component } from '@angular/core';
import * as employees from './employees.json';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-employees',
  imports: [NgxPaginationModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {

  employees = (employees as any).default;

  p: any;
  flag: boolean = true;

  onClickChange() {
    console.log(!this.flag);
    return this.flag = !this.flag;
  }

}
