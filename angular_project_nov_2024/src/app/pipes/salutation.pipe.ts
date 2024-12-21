import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salutation'
})
export class SalutationPipe implements PipeTransform {

  transform(name: string, gender: string): string {
    if (!name || !gender) return name;
    return gender.toLowerCase() === 'male' ? `Mr. ${name}` : `Miss. ${name}`;
  }

}
