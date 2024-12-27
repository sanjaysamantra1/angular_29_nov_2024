import { Component } from '@angular/core';
import { OrdinalPipe } from '../../pipes/ordinal.pipe';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AgePipe } from '../../pipes/age.pipe';
import { generate } from 'rxjs';
import { SalutationPipe } from '../../pipes/salutation.pipe';

@Component({
  selector: 'app-pipes',
  imports: [OrdinalPipe,FormsModule,AgePipe,SalutationPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {

  num:any=1;
  age:any;

  employees = [
    { id: 1, name: 'Dheeraj', position: 'Software Developer', salary: 75000,gender:'male' },
    { id: 2, name: 'Sankeerth', position: 'UI/UX Designer', salary: 65000, gender:'male'},
    { id: 3, name: 'Dhanush', position: 'Project Manager', salary: 90000,gender:'male' },
    { id: 4, name: 'nidhi', position: 'QA Engineer', salary: 60000, gender:'female' },
    { id: 5, name: 'kajal', position: 'DevOps Engineer', salary: 85000, gender:'female' },
   
  ];

}
