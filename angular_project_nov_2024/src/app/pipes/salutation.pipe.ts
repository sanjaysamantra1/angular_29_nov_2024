import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salutation'
})
export class SalutationPipe implements PipeTransform {

  transform(empname: string, gender: string): string {
    if (gender.toLowerCase() === 'male') {
      return `Mr. ${empname}`;
    } else {
      return `Miss. ${empname}`;
    }
  }
  

}