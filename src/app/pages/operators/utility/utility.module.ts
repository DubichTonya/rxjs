import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilityRoutingModule } from './utility-routing.module';
import { UtilityComponent } from './utility.component';
import { TapComponent } from './tap/tap.component';
import { DoComponent } from './do/do.component';
import { DelayComponent } from './delay/delay.component';
import { FinalizeComponent } from './finalize/finalize.component';
import { ContentComponent } from 'src/app/shared/components/content/content.component';

@NgModule({
  declarations: [
    UtilityComponent,
    TapComponent,
    DoComponent,
    DelayComponent,
    FinalizeComponent,
  ],
  imports: [CommonModule, UtilityRoutingModule, ContentComponent],
})
export class UtilityModule {}
