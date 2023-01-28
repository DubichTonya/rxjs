import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MulticastingRoutingModule } from './multicasting-routing.module';
import { MulticastingComponent } from './multicasting.component';


@NgModule({
  declarations: [
    MulticastingComponent
  ],
  imports: [
    CommonModule,
    MulticastingRoutingModule
  ]
})
export class MulticastingModule { }
