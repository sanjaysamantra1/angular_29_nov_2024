import {Pipe, PipeTransform, untracked} from '@angular/core';

@Pipe({
    name: 'ordinal'
})
export class OrdinalPipe implements PipeTransform {

    transform(inputNumber: number): string {
        const unitDigit = inputNumber % 10;

        if(inputNumber > 10) {
            console.log(inputNumber);
            let tempNumber = Math.floor(inputNumber / 10);
            const tensDigit = (tempNumber % 10);
            if (tensDigit == 1) {
                return inputNumber + 'th';
            }
        }
        let retString = '';

        switch (unitDigit) {
            case 1:
                retString = 'st';
                break;
            case 2:
                retString = 'nd';
                break;
            case 3:
                retString = 'rd';
                break;
            case 0:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
                retString = 'th';
                break;
        }
        return inputNumber + retString;
    }

}
