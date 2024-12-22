import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salutation'
})
export class SalutationPipe implements PipeTransform {

  transform(value: any) {

    if(value.gender==="male")
    return "Mr."+value.name;
    else{
      return "Miss."+value.name;
    }
  }


}
