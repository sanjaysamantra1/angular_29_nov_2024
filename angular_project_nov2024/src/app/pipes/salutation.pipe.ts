import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salutation'
})
export class SalutationPipe implements PipeTransform {

  transform(name: string, gender: string) {
    if (gender.toLowerCase() === 'male') {
      name = "Mr. " + name; 
  } else {
      name = "Ms. " + name; 
  }
  return name;
  }

}
