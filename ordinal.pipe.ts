import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinal'
})


  export class OrdinalPipe implements PipeTransform {

    transform(value: number): string {
      if (value === null || value === undefined) {
        return ''; 
      }
  
      const lastDigit = value % 10;
      const secondLastDigit = Math.floor(value / 10) % 10;
  
    
      if (secondLastDigit === 1) {
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
  
