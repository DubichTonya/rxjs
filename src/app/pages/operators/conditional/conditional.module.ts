import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConditionalRoutingModule } from './conditional-routing.module';
import { ConditionalComponent } from './conditional.component';
import { DefaultEmptyComponent } from './default-empty/default-empty.component';
import { EveryComponent } from './every/every.component';
import { SeequenceequalComponent } from './seequenceequal/seequenceequal.component';
import { IifComponent } from './iif/iif.component';
import { FormsModule } from '@angular/forms';
import { ContentComponent } from 'src/app/shared/components/content/content.component';

@NgModule({
  declarations: [
    ConditionalComponent,
    IifComponent,
    DefaultEmptyComponent,
    EveryComponent,
    SeequenceequalComponent,
  ],
  imports: [
    CommonModule,
    ConditionalRoutingModule,
    FormsModule,
    ContentComponent,
  ],
})
export class ConditionalModule {}
