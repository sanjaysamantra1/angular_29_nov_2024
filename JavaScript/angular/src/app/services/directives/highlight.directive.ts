import { Directive, ElementRef, HostListener, inject } from '@angular/core';
import { HighlightService } from '../injectable/highlight.service';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elemet: ElementRef,private highlightService : HighlightService) {
    console.log(elemet);
   }

  // element = inject(ElementRef);

  //  @HostListener('mouseenter') 
  //  onMouseEnter(){
  //   this.highlight('yellow','red');
  //   console.log('mouse entered');
  //  }

  //  @HostListener('mouseleave')
  //  onMouseLeave(){
  //   this.highlight('','');
  //   console.log('Mouse Left');
  //  }

  //  private highlight(bgColor: string, color: string){
  //   this.element.nativeElement.style.backgroundColor=bgColor;
  //   this.element.nativeElement.style.color=color;
  //  }


  
  @HostListener('mouseenter') 
  onMouseEnter(){
   this.highlightService.highlight(this.elemet,'yellow','red');
   console.log('mouse entered');
  }

  @HostListener('mouseleave')
  onMouseLeave(){
   this.highlightService.highlight(this.elemet,'','');
   console.log('Mouse Left');
  }


}
