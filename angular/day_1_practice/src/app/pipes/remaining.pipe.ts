import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'remaining'
})
export class RemainingPipe implements PipeTransform {

    transform(input: string, maxLength: number = 100): number {
        return maxLength - input.length;
    }

}
