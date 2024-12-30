import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinal'
})
export class OrdinalPipe implements PipeTransform {

  transform(value: any) {

    if(!value) return '';

    if(value%10==1 && value%100!=11)
      return value + 'st';

    if(value%10==2 && value%100!=12)
      return value + 'nd';

    if(value%10==3 && value%100!=13)
      return value + 'rd';

    if(value==0)
      return value + 'th';

    else return value + "th";
  }
}
