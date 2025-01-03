import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgePipe } from '../../pipes/age.pipe';
import { OrdinaltocardinalPipe } from '../../pipes/ordinaltocardinal.pipe';
import { SalutationPipe } from '../../pipes/salutation.pipe';
import { SearchPipe } from '../../pipes/search.pipe';

@Component({
  selector: 'app-pipes',
  imports: [
    CommonModule,
    FormsModule,
    AgePipe,
    OrdinaltocardinalPipe,
    SalutationPipe,
    SearchPipe
  ],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  today = new Date();
  dob: any;
  numbers = [1, 2, 3, 4, 21, 22, 23, 24];
  searchText: string = '';
  employees = [
    { name: 'Ram', gender: 'male', age: 30, position: 'Developer' },
    { name: 'Sita', gender: 'female', age: 25, position: 'Designer' },
    { name: 'Lakshman', gender: 'male', age: 45, position: 'Manager' },
    { name: 'Geetha', gender: 'female', age: 35, position: 'Analyst' },
  ];
}