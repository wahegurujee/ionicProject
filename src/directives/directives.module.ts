import { NgModule } from '@angular/core';
import { GlobeDirective } from './globe/globe';
import { CountupDirective } from './countup/countup';
@NgModule({
	declarations: [GlobeDirective,
    CountupDirective],
	imports: [],
	exports: [GlobeDirective,
    CountupDirective]
})
export class DirectivesModule {}
