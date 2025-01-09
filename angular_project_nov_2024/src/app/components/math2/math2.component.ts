import { Component,inject } from '@angular/core';
import { MathService } from '../../services/math.service';
@Component({
  selector: 'app-math2',
  imports: [],
  templateUrl: './math2.component.html',
  styleUrl: './math2.component.css'
})
export class Math2Component {
  private mathService = inject(MathService); // Dependency Injection
  ngOnInit(){
  console.log("Math2 Component");
  console.log(`Division of 10 & 20 is ${this.mathService.div(10, 20)}`);
}
}
