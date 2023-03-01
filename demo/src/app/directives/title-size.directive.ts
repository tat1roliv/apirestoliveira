import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTitleSize]'
})
export class TitleSizeDirective {
  @Input('appTitleSize') titleSize!: any;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {
    this.renderer.setStyle(this.element.nativeElement, 'font-size', '20px');
  }

}
