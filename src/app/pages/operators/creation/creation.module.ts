import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreationRoutingModule } from './creation-routing.module';
import { CreationComponent } from './creation.component';
import { FromComponent } from './from/from.component';
import { OfComponent } from './of/of.component';
import { FromEventComponent } from './from-event/from-event.component';
import { IntervalComponent } from './interval/interval.component';
import { TimerComponent } from './timer/timer.component';


@NgModule({
  declarations: [
    CreationComponent,
    FromComponent,
    OfComponent,
    FromEventComponent,
    IntervalComponent,
    TimerComponent
  ],
  imports: [
    CommonModule,
    CreationRoutingModule
  ]
})
export class CreationModule { }
