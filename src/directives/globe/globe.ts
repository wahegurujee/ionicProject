import { Directive } from '@angular/core';

/**
 * Generated class for the GlobeDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[globe]' // Attribute selector
})
export class GlobeDirective {

  constructor() {
    console.log('Hello GlobeDirective Directive');
  }

}
