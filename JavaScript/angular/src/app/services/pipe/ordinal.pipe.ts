import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinal'
})
export class OrdinalPipe implements PipeTransform {

  transform(arr: number []): string[] {
    
    const result: string[] = [];

    for(let i=0;i<arr.length;i++){
      
      const v = arr[i];

      if(v%10==1 && v!=11){
        result.push(`${v}st`)
      }
      else if(v%10==2 && v!=12){
        result.push(`${v}nd`);
      }
      else if(v%10==3 && v!=13){
        result.push(`${v}rd`);
      }
      else{
         result.push(`${v}th`);
    }

    }

    return result;
  }

}
