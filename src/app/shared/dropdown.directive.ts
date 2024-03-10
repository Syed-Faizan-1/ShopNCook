import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
  standalone: true
})
export class DropdownDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') onClick() {
    const targetDiv = this.el.nativeElement.nextElementSibling;
    const hasClass = targetDiv.classList.contains('show');
    if (hasClass) {
      this.renderer.removeClass(targetDiv, 'show');
    } else {
      this.renderer.addClass(targetDiv, 'show');
    }
  }
}
