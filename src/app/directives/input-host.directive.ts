import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appInputHost]'
})
export class InputHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
