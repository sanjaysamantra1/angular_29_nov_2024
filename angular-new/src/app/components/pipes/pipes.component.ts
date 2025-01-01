import { Component } from '@angular/core';
import { OrdinalpipePipe } from '../../pipes/ordinalpipe.pipe';
import { AgepipePipe } from '../../pipes/agepipe.pipe';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { SalutationpipePipe } from '../../pipes/salutationpipe.pipe';
import { SearchpipePipe } from '../../pipes/searchpipe.pipe';



@Component({
  selector: 'app-pipes',
  imports: [
    OrdinalpipePipe,
    AgepipePipe,
    DatePipe,
    FormsModule,
    SalutationpipePipe,
    SearchpipePipe
  ],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  nums =  [1, 2, 3, 4, 11, 21, 22, 23, 31] ;
  dob:any;
  employees = [
    { name: 'John Doe', gender: 'Male', age: 30 },
    { name: 'Jane Smith', gender: 'Female', age: 25 },
    { name: 'Sam Brown', gender: 'Male', age: 28 },
  ];
  searchTerm:any;
}
