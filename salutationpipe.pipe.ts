import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salutationpipe'
})
export class SalutationpipePipe implements PipeTransform {

  transform(value: string, gender: string): string {
    if (!value) return '';
    if (gender === 'male') {
      return `Mr. ${value}`; 
    } else if (gender === 'female') {
      return `Miss. ${value}`; // 
    }
    return value; 
  }

}
