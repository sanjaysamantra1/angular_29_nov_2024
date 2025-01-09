import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {
  constructor() { }

  PI = 3.141;
  add(a: number, b: number) {
    return a + b;
  }
  sub(a: number, b: number) {
    return a - b;
  }
  mul(a: number, b: number) {
    return a * b;
  }
  div(a: number, b: number){
    return a / b;
  }
  square(a: number) {
    return a * a;
  }
}