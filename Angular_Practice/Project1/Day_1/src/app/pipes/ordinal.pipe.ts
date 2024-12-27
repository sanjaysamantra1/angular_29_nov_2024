import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinal'
})
export class OrdinalPipe implements PipeTransform {

  
  transform(value: number){

    if(!value) return '';

   const bigNum= value%100;
   if(bigNum>=11 && bigNum<=13){
    return value+'th';
   }

   const smallNum=value%10;
   
   switch(smallNum){
    case 1:
      return value+'st';
    case 2:
      return value+'nd';
    case 3:
      return value+'rd';
    default:
      return value+'th';
   }

    
  }
}
