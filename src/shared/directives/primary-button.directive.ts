import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPrimaryButton]'
})
export class PrimaryButtonDirective implements OnInit {

  constructor(private elementRef: ElementRef<HTMLButtonElement>) { }

  ngOnInit() {
    this.elementRef.nativeElement.classList.add('primary-button')
  }

}
