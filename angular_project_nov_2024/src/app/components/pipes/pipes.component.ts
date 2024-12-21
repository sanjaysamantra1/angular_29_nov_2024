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
    FormsModule,
    CommonModule,
    RemainingPipe,
    AgePipe,
    TruncatePipe,
    OrdinalPipe,
    SalutationPipe,
    FilterPipe
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
    { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "eId": 104, "name": "geeta", "sal": 8000, "gender": "female" },
    { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
    { "eId": 102, "name": "sita", "sal": 9000, "gender": "female" }
  ];

}
