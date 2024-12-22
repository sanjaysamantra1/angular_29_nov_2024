import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinal'
})
export class OrdinalPipe implements PipeTransform {
  i:number=0;
  j:number=0;

  transform(value: number) {
    if((value==null)) return '';
    
    if(((this.i=(value)%10)===1)&&(this.j=(value)%100)!==11){
      return value+"st";

    }
    else if(((this.i=(value)%10)===2)&&(this.j=(value)%100)!==12){
      return value+"nd";
    }
    else if(((this.i=(value)%10)===3)&&(this.j=(value)%100)!==13){
      return value+"rd";
    }
    else{
      return value+"th";
    }
  }

}
