import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinalpipe'
})
export class OrdinalpipePipe implements PipeTransform {

  transform(value: number): string {
    const lastDigit = value % 10;
    const lastTwoDigits = value % 100;
    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
      return `${value}th`;
    }
    switch (lastDigit) {
      case 1:
        return `${value}st`;
      case 2:
        return `${value}nd`;
      case 3:
        return `${value}rd`;
      default:
        return `${value}th`;
    }
  }
}
