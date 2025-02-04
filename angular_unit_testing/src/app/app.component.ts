import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_unit_testing';

  add(a: number, b: number) {
    return a + b;
  }
  sumOfDigit(num: any) { // 125 = 8
    let sum = 0; let rem = 0;
    while (num != 0) {
      rem = num % 10;
      sum = sum + rem;
      num = Math.floor(num / 10);
    }
    return sum;
  }

  isEven(n: number) {
    if (n % 2 == 0) {
      return 'even'
    } else {
      return 'odd';
    }
  }

  cars = ['Tata', 'Honda'];
  addNewCar(car: string) {
    this.cars.push(car);
  }
}
