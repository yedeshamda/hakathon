import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appDisableControl]'
})
export class DisableControlDirective {
  @Input() set appDisableControl(condition: boolean) {
    this.renderer.setProperty(this.el.nativeElement, 'disabled', condition);
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}
}
