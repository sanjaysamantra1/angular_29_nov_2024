import { Component } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import * as employees from './employee.json'
@Component({
  selector: 'app-employee',
  imports: [NgxPaginationModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  
  
  employees = (employees as any).default;
  p: any;
  flag: boolean = true;
  onClickChange() {
    console.log(!this.flag);
    return this.flag = !this.flag;
}
}
