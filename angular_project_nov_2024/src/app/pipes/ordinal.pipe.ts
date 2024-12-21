import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinal',
  standalone: true
})
export class OrdinalPipe implements PipeTransform {
  transform(value: number): string {
    if ((value==0)||(value==null)) return '';
    
    const j = value % 10;
    const k = value % 100;
    
    if (j === 1 && k !== 11) {
      return value + "st";
    }
    if (j === 2 && k !== 12) {
      return value + "nd";
    }
    if (j === 3 && k !== 13) {
      return value + "rd";
    }
    return value + "th";
  }
}