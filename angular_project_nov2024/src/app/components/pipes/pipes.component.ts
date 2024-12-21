import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RemainingpipePipe } from '../../pipes/remaining.pipe';
import { AgePipe } from '../../pipes/age.pipe';
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { OrdinalPipe } from '../../pipes/ordinal.pipe';
import { SalutationPipe } from '../../pipes/salutation.pipe';
import { FilterPipe } from '../../pipes/filter.pipe';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule,
    FormsModule,
    RemainingpipePipe,
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
  myName :string ="sacHin TendUlkar";
  sal :number =5000;
  today= new Date();
  user = { name: 'sachin', 'profession': 'cricketer', age: 50, address: 'Mumbai' };
  arr=[10,20,30,40,50,60];
  msg:string="";
  msg2: string = '';
  dob: any;
  longStr = 'Hellooo Hiiiiiiiiii , Good Morning , How are you?'
  num: number = 0;
  searchTerm: string = '';

  employees: any = [
    { "Id": 11234, "name": "Vikcy", "gender": "male" },
    { "Id": 1345, "name": "Riya",  "gender": "female" },
    { "Id": 1671, "name": "Anshu", "gender": "male" },
    { "Id": 1589, "name": "Athiya", "gender": "female" },
    { "Id": 1926, "name": "Arshi", "gender": "female" },
    { "Id": 1008, "name": "Arya", "gender": "male" }
  ];

}
