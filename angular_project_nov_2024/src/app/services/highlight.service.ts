import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HighlightService {

  highlight(ele: any, bgColor: string, color: string) {
    ele.nativeElement.style.backgroundColor = bgColor;
    ele.nativeElement.style.color = color;
  }
}
