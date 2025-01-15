import { Directive, inject, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})

export class HighlightDirective {

  element = inject(ElementRef);

  constructor() { }

  ngOnInit() {
    this.element.nativeElement.style.backgroundColor = 'yellow';
  }

}
