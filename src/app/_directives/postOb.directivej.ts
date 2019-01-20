import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[postObj]'
})
export class PostObjDirective {

  // @Input('postObj') private postObj: object;

  constructor(el: ElementRef) {
    // el.nativeElement.projectName = 'lol';
    // alert(this.postObj.name);
  }
}
