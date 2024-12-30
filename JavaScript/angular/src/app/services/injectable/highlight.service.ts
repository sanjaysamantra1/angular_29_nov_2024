import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HighlightService {

   highlight(element:  any, bgColor: string, color: string){
    element.nativeElement.style.backgroundColor=bgColor;
    element.nativeElement.style.color=color;
   }
}
