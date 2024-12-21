import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RemainingPipe } from '../../pipes/remaining.pipe';
import { AgePipe } from '../../pipes/age.pipe';
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { OrdinalPipe } from '../../pipes/ordinal.pipe';
import { SalutationPipe } from '../../pipes/salutation.pipe';
import { FilterPipe } from '../../pipes/filter.pipe';

@Component({
  selector: 'app-pipes',
  imports: [
    CommonModule,
    FormsModule,
    RemainingPipe,
    AgePipe,
    TruncatePipe,
    OrdinalPipe,
    FilterPipe,
    SalutationPipe
  ],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  myName: string = 'SacHiN teNdUlKaR';
  sal: number = 5000;
  today = new Date();
  user = { name: 'sachin', 'profession': 'cricketer', age: 50, address: 'Mumbai' };
  arr = [10, 20, 30, 40, 50, 60, 70];
  msg: string = '';
  msg2: string = '';
  dob: any;
  longStr = 'Hellooo Hiiiiiiiiii , Good Morning , How are you?'

  num: number = 0;
  searchInput: string = '';

  employees: any = [
    { "eId": 101, "name": "Cindy", "sal": 80000, "gender": "F"},
    { "eId": 102, "name": "Gina", "sal": 10000, "gender": "F"},
    { "eId": 103, "name": "Jordan", "sal": 75000, "gender": "M" },
    { "eId": 104, "name": "Kate", "sal": 90000, "gender": "M" },
    { "eId": 105, "name": "Zachary", "sal": 60000, "gender": "F" },
  ];


}
