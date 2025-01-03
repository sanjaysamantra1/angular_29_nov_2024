import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salutation'
})
export class SalutationPipe implements PipeTransform {

  transform(value:string,gender:'male'|'female'): string {
    if(!value) return value;
    return gender==='male'?`Mr. ${value}`:`Miss ${value}`;
  }


}
