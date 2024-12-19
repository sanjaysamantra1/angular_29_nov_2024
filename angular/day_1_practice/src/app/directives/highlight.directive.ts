import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
    selector: '[highlight]',
})
export class HighlightDirective {
    // Dependency Injection (creating instance of ElementRef - class inside our directive)
    constructor(private ele: ElementRef) {
        console.log(ele);
    }

    @HostListener('mouseenter')
    onMouseEnter() {
        this.highlight('black', 'goldenrod');
    }
    @HostListener('mouseleave')
    onMouseLeave() {
        this.highlight('', '');
    }
    private highlight(bgColor: string, color: string) {
        this.ele.nativeElement.style.backgroundColor = bgColor;
        this.ele.nativeElement.style.color = color;
    }
}
