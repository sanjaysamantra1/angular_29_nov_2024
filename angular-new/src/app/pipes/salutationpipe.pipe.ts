import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salutationpipe'
})
export class SalutationpipePipe implements PipeTransform {
  transform(name: string, gender: string): string {
    if (gender === 'Male') {
      return `Mr. ${name}`;
    } else if (gender === 'Female') {
      return `Miss. ${name}`;
    }
    return name;
  }
}
