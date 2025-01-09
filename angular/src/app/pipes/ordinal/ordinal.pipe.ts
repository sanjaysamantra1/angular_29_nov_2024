import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'ordinal'
})
export class OrdinalPipe implements PipeTransform {

  transform(n : number): String {

    let ord = 'th';

    
    if(n==null){
      return 'Pease enter A number';
    }
    if (n % 10 == 1 && n % 100 != 11)
    {
      ord = 'st';
    }
    else if (n % 10  == 2 && n % 100 != 12)
    {
      ord = 'nd';
    }
    else if (n % 10 == 3 && n % 100 != 13)
    {
      ord = 'rd';
    }
    return `${n}${ord}`;
  }


}
function getOrdinal(n : number ) {
  let ord = 'th';


  return ord;
}