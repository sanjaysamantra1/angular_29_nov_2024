import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinal'
})
export class OrdinalPipe implements PipeTransform {

  transform(number: any): any {
    if (number.toString() == "11" || number.toString() == "12" || number.toString() == "13") {
      return number + "th"
    } else if (number.toString().endsWith(1)) {
      return number + 'st';
    } else if (number.toString().endsWith(2)) {
      return number + 'nd';
    } else if (number.toString().endsWith(3)){
      return number + 'rd';
    } else {
      return number + "th"
    }
  }

}