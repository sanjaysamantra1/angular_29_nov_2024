import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remaining'
})
export class RemainingPipe implements PipeTransform {
  transform(input: any) {
    var output = 150 - input.length;
    return output;
  }

}
