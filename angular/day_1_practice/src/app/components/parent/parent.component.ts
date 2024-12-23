import { Component } from '@angular/core';
import { Child1Component } from '../child1/child1.component';
import { Child2Component } from '../child2/child2.component';

@Component({
    selector: 'app-parent',
    imports: [Child1Component, Child2Component],
    templateUrl: './parent.component.html',
    styleUrl: './parent.component.css',
    inputs: ['cars'],
})
export class ParentComponent {
    own: number = 10;
    b: number = 10000;
    child1Ref: any;

    parentCars: any;
    getDataFromChild(carsFromChild: any) {
        this.parentCars = carsFromChild;
    }
}
