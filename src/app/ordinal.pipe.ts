import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinal'
})
export class OrdinalPipe implements PipeTransform {

  transform(value:number): string {
    const specialcase=[11,12,13];
    let twodigits=value%100;
    if(specialcase.includes(twodigits))
    {
      return `${value}th`;
    }

    let onedigit=value%10;
    let suffix='th';
    switch(onedigit)
    {
      case 1:
        suffix='st';
        break;
      case 2:
        suffix="nd";
        break;
      case 3:
        suffix="rd";
        break;
    }
    return `${value}${suffix}`;
  }


}
