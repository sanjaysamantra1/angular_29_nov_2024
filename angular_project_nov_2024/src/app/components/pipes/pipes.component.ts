import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RemainingPipe } from '../../pipes/remaining.pipe';
import { AgePipe } from '../../pipes/age.pipe';
import { TruncatePipe } from '../../pipes/truncate.pipe';

@Component({
  selector: 'app-pipes',
  imports: [
    CommonModule,
    FormsModule,
    RemainingPipe,
    AgePipe,
    TruncatePipe
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
}
