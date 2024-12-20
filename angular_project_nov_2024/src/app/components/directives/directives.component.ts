
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { NumberonlyDirective } from '../../directives/numberonly.directive';
import { HighlightDirective } from '../../directives/highlight.directive';

@Component({
  selector: 'app-directives',
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    NumberonlyDirective,
    HighlightDirective
  ],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  num: number = 5;
  cars: string[] = ['Tata', 'Honda', 'Maruti', 'Hundai', 'Toyota'];
  flag: boolean = true;
  faStar: any = faStar;
  faPlane: any = faPlane;

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
