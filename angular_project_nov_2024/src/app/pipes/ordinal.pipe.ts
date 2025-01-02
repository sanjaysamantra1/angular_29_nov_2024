import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinal'
})
export class OrdinalPipe implements PipeTransform {

  transform(value: any) {
    if(value==0 || value== null){
      return '';
    }
    else{
      if(value==11 || value==12 || value==13){
        return value+"th";
      }
      else{
        if(value%10==1){
          return value+"st"
        }
        else if(value%10==2){
          return value+"nd"
        }
        else if(value%10==1){
          return value+"rd"
        }
      }  
    }
    return value+"th";
  }

}
