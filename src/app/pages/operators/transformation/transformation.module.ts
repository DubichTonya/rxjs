import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransformationRoutingModule } from './transformation-routing.module';
import { TransformationComponent } from './transformation.component';
import { BufferTimeComponent } from './buffer-time/buffer-time.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { MapComponent } from './map/map.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { ScanComponent } from './scan/scan.component';
import { ContentComponent } from 'src/app/shared/components/content/content.component';
import { ExhaustMapComponent } from './exhaust-map/exhaust-map.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TransformationComponent,
    BufferTimeComponent,
    ConcatMapComponent,
    MapComponent,
    MergeMapComponent,
    ExhaustMapComponent,
    SwitchMapComponent,
    ScanComponent,
  ],
  imports: [
    CommonModule,
    TransformationRoutingModule,
    ContentComponent,
    ReactiveFormsModule,
  ],
})
export class TransformationModule {}
