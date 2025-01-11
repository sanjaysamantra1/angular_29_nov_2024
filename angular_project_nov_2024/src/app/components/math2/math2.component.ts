import { Component, inject } from '@angular/core';
import { MathService } from '../../services/math.service';

@Component({
  selector: 'app-math2',
  imports: [],
  templateUrl: './math2.component.html',
  styleUrl: './math2.component.css'
})
export class Math2Component {

    private mathService = inject(MathService);  // Dependency Injection

    ngOnIt(){
      console.log('I am Demo-2 Component');
      console.log('square of 10 is ${this.mathService.square(10)}');
    }
}
