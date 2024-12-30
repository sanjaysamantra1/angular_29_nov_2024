import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  // dependency injection (creating instance of ElementRef - class inside our directive)
  // In angular, we don't create create objects for class explicitly. Rather, angular itself creates objects for us using  dependency injection 
  // In dependency injection, there are 2 ways to create, one way is using a constructor parameterization and the other one is using inject()

  // rather than using new keyword for creating new instances (this.ele = new ElementRef();) of the ElementRef class (in this case) we do it in the following way 
  // ex-1 (through constructor parameterization)
  // constructor(private ele: ElementRef) { 
  //   console.log(ele);
  // }

  // ex-2 (through inject())
  // ele = inject(ElementRef);

  ele = inject(ElementRef);

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow', 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('', '');
  }

  private highlight(bgColor: string, color: string) {
    this.ele.nativeElement.style.background = bgColor;
    this.ele.nativeElement.style.color = color;
  }

}
