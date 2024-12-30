import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salutation'
})
export class SalutationPipe implements PipeTransform {

  transform(name: string,gender: string): string {
    return gender=="male" ? `Mr. ${name}` : `Mis. ${name}`;
  }

}
