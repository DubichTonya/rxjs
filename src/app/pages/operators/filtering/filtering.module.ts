import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilteringRoutingModule } from './filtering-routing.module';
import { FilteringComponent } from './filtering.component';


@NgModule({
  declarations: [
    FilteringComponent
  ],
  imports: [
    CommonModule,
    FilteringRoutingModule
  ]
})
export class FilteringModule { }
