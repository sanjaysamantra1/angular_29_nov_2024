
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OrdinalPipe } from '../pipes/ordinal/ordinal.pipe';
import { AgePipe } from '../pipes/age/age.pipe';
import { GenderPipe } from '../pipes/salutation/gender.pipe';
import { SearchPipe } from '../pipes/search/search.pipe';

@Component({
  selector: 'app-custompipe',
  imports: [FormsModule, OrdinalPipe, AgePipe, GenderPipe, SearchPipe],
  templateUrl: './custompipe.component.html',
  standalone: true,
  styleUrl: './custompipe.component.css',
})
export class CustompipeComponent {
  inputvalue: number = 1;
  dob: string = '';
  age: number = 0;

  
  empolyeelist :any = [
    {
      id: 1,
      name: 'Neelam Sanjiva Reddy',
      gender: 'male',
      yearsOfrule: '1956-1960',
    },
    {
      id: 2,
      name: 'Damodaram Sanjivayya',
      gender: 'male',
      yearsOfrule: '1960-1962',
    },
    {
      id: 3,
      name: 'Kasu Brahmananda Reddy',
      gender: 'male',
      yearsOfrule: '1964-1971',
    },
    { id: 4, name: 'sonia gandhi', gender: 'female', yearsOfrule: '2012-2016' },
    { id: 5, name: 'rasmya srikarr', gender: 'gay', yearsOfrule: '2018-2022' },

  ];
searchtext: string='';
  

  check(){
    console.log(this.empolyeelist);
    
  }
}
