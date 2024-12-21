import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salutation',
  standalone: true
})
export class SalutationPipe implements PipeTransform {
  transform(name: string, gender?: 'male' | 'female'): string {
    if (!name) return '';
    
    if (gender === 'male') return `Mr. ${name}`;
    if (gender === 'female') return `Ms. ${name}`;
    return `Mr./Ms. ${name}`;
  }
}