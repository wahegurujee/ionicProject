import { Directive } from '@angular/core';

/**
 * Generated class for the CountupDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[countup]' // Attribute selector
})
export class CountupDirective {

  constructor() {
    console.log('Hello CountupDirective Directive');
  }

}
