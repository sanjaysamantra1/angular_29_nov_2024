import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgePipe } from '../age.pipe';
import { OrdinalPipe } from '../ordinal.pipe';
import { SalutationPipe } from '../salutation.pipe';
import { EmployeefilterPipe } from '../employeefilter.pipe';
import { FormsModule } from '@angular/forms';
interface Employee {
  name: string;
  gender: 'male' | 'female'; // Strictly type gender
}


@Component({
  selector: 'app-custom-pipe',
  imports: [CommonModule,AgePipe,OrdinalPipe,SalutationPipe,EmployeefilterPipe,FormsModule],
  templateUrl: './custom-pipe.component.html',
  styleUrl: './custom-pipe.component.css'
})
export class CustomPipeComponent {
  employees: Employee[] =[
    {name:'Sagar',gender:'male'},
    {name:"Neelima",gender:'female'}
  ];
  searchQuery: string = ''; // Search input bound to this variable

  employeesData = [
    { name: 'John Doe', gender: 'male', department: 'Engineering' },
    { name: 'Jane Smith', gender: 'female', department: 'HR' },
    { name: 'Michael Johnson', gender: 'male', department: 'Finance' },
    { name: 'Emily Davis', gender: 'female', department: 'Marketing' }
  ];

}
