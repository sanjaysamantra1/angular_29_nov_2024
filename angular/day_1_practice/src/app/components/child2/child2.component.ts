import { Component } from '@angular/core';
import { Child1Component } from '../child1/child1.component';

@Component({
    selector: 'app-child2',
    imports: [Child1Component],
    templateUrl: './child2.component.html',
    styleUrl: './child2.component.css',
    inputs: ['b', 'child1Ref'],
})
export class Child2Component {
    b: number = 0;
    child1Ref: any;
}
