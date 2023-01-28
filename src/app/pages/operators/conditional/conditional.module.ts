import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConditionalRoutingModule } from './conditional-routing.module';
import { ConditionalComponent } from './conditional.component';


@NgModule({
  declarations: [
    ConditionalComponent
  ],
  imports: [
    CommonModule,
    ConditionalRoutingModule
  ]
})
export class ConditionalModule { }
