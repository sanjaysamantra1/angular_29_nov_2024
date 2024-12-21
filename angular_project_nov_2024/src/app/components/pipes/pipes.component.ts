import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RemainingPipe } from '../../pipes/remaining.pipe';
import { AgePipe } from '../../pipes/age.pipe';
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { MysortPipe } from '../../pipes/mysort.pipe';

@Component({
  selector: 'app-pipes',
  imports: [
    CommonModule,
    FormsModule,
    RemainingPipe,
    AgePipe,
    TruncatePipe,
    MysortPipe
  ],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  myName: string = 'SacHiN teNdUlKaR';
  sal: number = 5000;
  today = new Date();
  user = { name: 'sachin', 'profession': 'cricketer', age: 50, address: 'Mumbai' };
  arr1 = [20, 10, 50, 30, 40];
  arr2 = [20, 10, 50, 30, 40];
  msg: string = '';
  msg2: string = '';
  dob: any;
  longStr = 'Hellooo Hiiiiiiiiii , Good Morning , How are you?';

  pushDataToArr(num: any) {
    // this.arr2 = [...this.arr1, +num];
    this.arr2.push(+num);
  }
}
