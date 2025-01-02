import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mrMiss'
})
export class MrMissPipe implements PipeTransform {

  transform(value: string, abc: string) {
    if(abc=="female"){
      return "miss."+value;
    }
    else{
      return "mr."+value;
    }
  }

}
