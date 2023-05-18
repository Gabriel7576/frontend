import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appRed]'
})

//Essa é uma diretiva de atributo
export class RedDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.color = 'blue';
  }

}
