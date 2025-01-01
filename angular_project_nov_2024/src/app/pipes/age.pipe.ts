import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age',
  pure: false
})
export class AgePipe implements PipeTransform {

  transform(value: any): any {
    console.log('Age Pipe called...')
    if (!value) return '';
    const currentYear = new Date().getFullYear();
    const dobYear = new Date(value).getFullYear();
    const age = currentYear - dobYear;
    return age + ' years old';
  }

}
