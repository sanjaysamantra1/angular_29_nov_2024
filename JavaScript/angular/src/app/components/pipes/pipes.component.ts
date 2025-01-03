import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RemainingpipePipe } from '../../services/pipe/remainingpipe.pipe';
import { AgePipe } from '../../services/pipe/age.pipe';
import { TruncatePipe } from '../../services/pipe/truncate.pipe';
import { SortingPipe } from '../../services/pipe/sorting.pipe';
import { OrdinalPipe } from '../../services/pipe/ordinal.pipe';
import { SalutationPipe } from '../../services/pipe/salutation.pipe';
import { SearchPipe } from '../../services/pipe/search.pipe';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule,FormsModule,RemainingpipePipe,AgePipe,TruncatePipe,SortingPipe,OrdinalPipe,SalutationPipe,SearchPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {

  myName: string = 'Rohith RudraPati';
  sal : number = 5000;
  today= new Date();
  arr : number[] =[21,22,23,24];
  arr2 : number[] =[25,3,78,1];
  arrval : number[] = [];
  user = {name:"Rohith",lastname:"Rudrapati",age:24,profession:"Gamer"};
  msg: string = '';
  anotherMsg : string = '';
  dob : any;
  myString = 'Hiiiiiiiiiiiiii Rohithhhhhhhhhh, How You Doinnnn Todayyyyyy?';
  searchText: string ='';

  employees = [
    { name: 'Rohit Sharma', gender: 'male', designation: 'Software Developer', salary: 70000 },
    { name: 'Priya Singh', gender: 'female', designation: 'UI Designer', salary: 60000 },
    { name: 'Amit Kumar', gender: 'male', designation: 'Project Manager', salary: 120000 },
    { name: 'Neha Verma', gender: 'female', designation: 'HR Manager', salary: 80000 },
    { name: 'Rajesh Gupta', gender: 'male', designation: 'Tester', salary: 50000 }
  ];


  pushingDataToArr(num: any){
    this.arr2.push(num);
  }


  arrIteration() {
    for (let i = 0; i < this.arr.length; i++) {
      console.log(this.arr[i]); 
      this.arrval.push(this.arr[i]);
    }
  }
 


}
