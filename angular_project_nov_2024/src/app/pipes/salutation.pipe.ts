import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salutation'
})
export class SalutationPipe implements PipeTransform {

  transform(empname: string, gender: string): string {
    if (gender.toLowerCase() === 'M') {
      return `Mr. ${empname}`;
    } else {
      return `Miss. ${empname}`;
    }
  }
  

}