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
      
      // Check for invalid date
      if (isNaN(birthDate.getTime())) {
        console.warn('Invalid date provided to AgePipe:', value);
        return 0;
      }

      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      
      // Adjust age if birthday hasn't occurred this year
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      
      // Validate age is not negative
      return age < 0 ? 0 : age;
    } catch (error) {
      console.error('Error calculating age:', error);
      return 0;
    }
  }
}