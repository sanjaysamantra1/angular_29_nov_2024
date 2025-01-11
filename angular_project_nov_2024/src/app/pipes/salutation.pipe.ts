import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salutation'
})
export class SalutationPipe implements PipeTransform {

  transform(value: any) {
    if(value.gender=='male')
      return "mr." + value.name;
    else
      return "miss." + value.name;
  }

}