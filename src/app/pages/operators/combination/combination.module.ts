import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CombinationRoutingModule } from './combination-routing.module';
import { CombinationComponent } from './combination.component';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';


@NgModule({
  declarations: [
    CombinationComponent,
    CombineLatestComponent
  ],
  imports: [
    CommonModule,
    CombinationRoutingModule
  ]
})
export class CombinationModule { }
