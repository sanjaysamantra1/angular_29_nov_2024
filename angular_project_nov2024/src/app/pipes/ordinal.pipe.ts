import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinal'
})
export class OrdinalPipe implements PipeTransform {

  transform(value: any): any {
    if (value.toString() == "11" || value.toString() == "12" || value.toString() == "13") {
      return value + "th"
    } else if (value.toString().endsWith(1)) {
      return value + 'st';
    } else if (value.toString().endsWith(2)) {
      return value + 'nd';
    } else if (value.toString().endsWith(3)){
      return value + 'rd';
    } else {
      return value + "th"
    }
  }

}
