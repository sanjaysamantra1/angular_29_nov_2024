import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

    transform(inputString: string, limit: number, completeWord: boolean, ellipsis: string): string {
        if(completeWord){
            limit = inputString.substring(0, limit).lastIndexOf(" ");
        }
        return inputString.length > limit ? inputString.substring(0, limit)+ellipsis : inputString;
    }

}
