import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinaltocardinal'
})
export class OrdinaltocardinalPipe implements PipeTransform {

  transform(value: number): string {
    if (!value || isNaN(value)) return value?.toString() || '';

    const suffixes = ['th', 'st', 'nd', 'rd'];
    const v = value % 100;
    const suffix =
      suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0];

    return `${value}${suffix}`;
  }

}
