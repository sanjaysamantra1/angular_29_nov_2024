import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(dob: Date): string {
      const currentYear = new Date().getFullYear();
      const dobYear= new Date(dob).getFullYear();
      const age = currentYear-dobYear;
      return age + " years old"
  }

}
