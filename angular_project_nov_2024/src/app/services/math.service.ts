import { Injectable } from '@angular/core';
import { EmployeeService } from './employee.service';

@Injectable({
  providedIn: 'root'
})
export class MathService {

  constructor(private empService:EmployeeService) { }
  PI=3.14
  add(a:number,b:number){
    return a+b;
  }
  sub(a:number,b:number){
    return a-b;
  }
  mul(a:number,b:number){
    return a*b;
  }
  squareb(a:number){
    return a*a;
  }
}
