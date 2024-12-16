import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-databinding',
    imports: [FormsModule],
    templateUrl: './databinding.component.html',
    styleUrl: './databinding.component.css',
})
export class DatabindingComponent {
    myName: string = 'Pradeep';
    imgUrl: string =
        'https://images.hindustantimes.com/img/2022/09/02/550x309/tendulkar_mi_ipl_1650777563845_1662102044860_1662102044860.webp';
    flag: boolean = false;
    myWidth = '50%';
    myHeight = '50%';
    myAriaLabel = 'This is an Aria Label';

    num1 = 0;
    num2 = 0;
    msg = '';
    selectState = '';

    func1() {
        console.log('func1 invoked');
    }

    addition(n1: string, n2: string) {
        console.log(`Addition of ${n1} and ${n2} is ${+n1 + +n2}`);
    }
}
