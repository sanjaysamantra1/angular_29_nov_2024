import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorting',
  pure:false
})
export class SortingPipe implements PipeTransform {

  transform(arr : number[]){

    return arr.sort((a:number,b:number)=>a-b);
  }
}
