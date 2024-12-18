
import { CommonModule } from '@angular/common';
import { HttpBackend } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  imports: [CommonModule, FormsModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  num: number = 5;
  cars: string[] = ['Tata', 'Honda', 'Maruti', 'Hundai', 'Toyota'];
  flag: boolean = true;

  myStyle1 = {
    "color": 'red',
    "background-color": 'yellow',
    "border": "5px dotted purple"
  }
  myStyle2 = {
    "color": 'green',
    "background-color": 'red',
    "border": "5px dotted brown"
  }


  myFunction() {
    return this.num % 2 == 0 ? this.myStyle1 : this.myStyle2;
  }

  employees: any = [
    { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "eId": 104, "name": "geeta", "sal": 8000, "gender": "female" },
    { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
    { "eId": 102, "name": "sita", "sal": 9000, "gender": "female" }
  ];
  addNewEmployee() {
    this.employees = [
      { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
      { "eId": 104, "name": "geeta", "sal": 8000, "gender": "female" },
      { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
      { "eId": 102, "name": "sita", "sal": 9000, "gender": "female" },
      { "eId": 105, "name": "deepak", "sal": 8000, "gender": "male" }
    ];
  }

}
