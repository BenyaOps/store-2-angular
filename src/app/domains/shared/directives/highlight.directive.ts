import { Directive, inject, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})

export class HighlightDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.color = 'yellow';
   }
  //element = inject(ElementRef);

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.color = 'red';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.color = 'green';
  }



  //ngOnInit() {
  //  this.element.nativeElement.style.backgroundColor = 'yellow';
  //}

}
