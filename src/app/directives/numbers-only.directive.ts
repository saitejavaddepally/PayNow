import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appNumbersOnly]'
})
export class NumbersOnlyDirective {
  // <input type="text" appNumbersOnly/>
  @Input() appNumbersOnly!:string | number;
  constructor() {}
  @HostListener('keypress', ['$event'])
  restrictToNumbersOnly(event: KeyboardEvent) {
    const allowedLength=this.appNumbersOnly?Number(this.appNumbersOnly):14;
    const textbox=event.target as HTMLInputElement;
    const key = event.keyCode;
    if (textbox.value.length>=allowedLength || key < 48 || key > 57) {
      event.preventDefault();
    }
  }
}
