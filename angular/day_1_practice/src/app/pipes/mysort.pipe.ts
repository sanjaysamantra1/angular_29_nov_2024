import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'mysort',
    pure: false,
})
export class MysortPipe implements PipeTransform {
    transform(arr: any): number[] {
        return arr.sort((a: number, b: number) => a - b);
    }
}
