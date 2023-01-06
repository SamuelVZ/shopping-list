import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  //apply class show when click to the children with ElementRef
  // @HostBinding('class.show') isOpen = false;

  constructor(
    private theElementRef: ElementRef,
    private theRenderer: Renderer2
  ) {}

  @HostListener('click') toogleOpen() {
    // this.isOpen = !this.isOpen;
    let elements = this.theElementRef.nativeElement.querySelectorAll('.show');

    if (elements.length > 0) {
      this.theRenderer.removeClass(
        this.theElementRef.nativeElement.children[1],
        'show'
      );
    } else {
      console.log(
        'know more about childrens',
        this.theElementRef.nativeElement.children[1]
      );
      this.theRenderer.addClass(
        this.theElementRef.nativeElement.children[1],
        'show'
      );
    }
  }
}
