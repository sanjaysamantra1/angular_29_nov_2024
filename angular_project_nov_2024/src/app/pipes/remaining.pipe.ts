import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remaining'
})
export class RemainingPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
