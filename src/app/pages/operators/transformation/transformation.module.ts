import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransformationRoutingModule } from './transformation-routing.module';
import { TransformationComponent } from './transformation.component';


@NgModule({
  declarations: [
    TransformationComponent
  ],
  imports: [
    CommonModule,
    TransformationRoutingModule
  ]
})
export class TransformationModule { }
