import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RemainingPipe } from '../../pipes/remaining.pipe';
import { AgePipe } from '../../pipes/age.pipe';
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { OrdinalPipe } from '../../pipes/ordinal.pipe';
import { SalutationPipe } from '../../pipes/salutation.pipe';
import { FilterPipe } from '../../pipes/filter-by-value.pipe';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule, FormsModule, RemainingPipe, AgePipe, TruncatePipe, OrdinalPipe, SalutationPipe, FilterPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})

export class PipesComponent {
  myName: string = "sacHIN";
  sal: number = 5000;
  today = new Date();
  user = { name: 'sachin', profession: 'cricketer', age: 50, address: 'mumbai' };
  arr = [10, 20, 30, 40, 50, 60, 70];
  msg: string = "";
  msg2: string = "";
  dob: any;
  longStr = 'Helloooo Hiiiiiiii, Good Morning';
  cardinalNum: any;
  searchInput: any;
  employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 102, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 104, name: 'sita', sal: 9000, gender: 'female' },
    { eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
  ];

}
