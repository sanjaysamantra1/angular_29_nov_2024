import { Component, inject } from '@angular/core';
import { MathService } from '../../services/service/math.service';

@Component({
  selector: 'app-math2',
  imports: [],
  templateUrl: './math2.component.html',
  styleUrl: './math2.component.css'
})
export class Math2Component {

  // By using this inject we can do dependecy injection - Alternative Approach
  // by def its public (access specifier)
  private mathService = inject(MathService);

  ngOnInit(){
    console.log("Im Math 2");
    
    console.log(`Sqaure of 77 is ${this.mathService.square(77)}`);
    
  }
}
