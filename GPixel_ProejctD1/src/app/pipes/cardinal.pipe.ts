import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardinal',
  standalone: true
})
export class CardinalPipe implements PipeTransform {

  transform(input: number) {
    if(input === null || input ===undefined){
      return '';
    }
    let j = input % 10,
      k = input % 100;
    if (j === 1 && k !== 11) {
      return input + "st";
    }
    if (j === 2 && k !== 12) {
      return input + "nd";
    }
    if (j === 3 && k !== 13) {
      return input + "rd";
    }
    return input + "th";
  }
}