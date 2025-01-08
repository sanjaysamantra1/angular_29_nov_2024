import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age',
  standalone: true
})
export class AgePipe implements PipeTransform {
  transform(value: string | Date | null | undefined): number {
    if (!value) {
      return 0;
    }
    
    try {
      const birthDate = new Date(value);
      
      
      if (isNaN(birthDate.getTime())) {
        console.warn('Invalid date provided to AgePipe:', value);
        return 0;
      }

      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      
      
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      
    
      return age < 0 ? 0 : age;
    } catch (error) {
      console.error('Error calculating age:', error);
      return 0;
    }
  }
}