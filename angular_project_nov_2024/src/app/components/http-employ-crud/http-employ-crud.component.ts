import { Component } from '@angular/core';
import { HttpEmpSeviceService } from '../../services/http-emp-sevice.service';

@Component({
  selector: 'app-http-employ-crud',
  imports: [],
  templateUrl: './http-employ-crud.component.html',
  styleUrl: './http-employ-crud.component.css'
})
export class HttpEmployCRUDComponent {
  constructor(private httpempservice:HttpEmpSeviceService){
      
    }
    

}
