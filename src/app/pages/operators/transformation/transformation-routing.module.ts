import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BufferTimeComponent } from './buffer-time/buffer-time.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { FlatMapComponent } from './flat-map/flat-map.component';
import { MapComponent } from './map/map.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { ScanComponent } from './scan/scan.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { TransformationComponent } from './transformation.component';

const routes: Routes = [
  {
    path: '',
    component: TransformationComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/transformation/bufferTime',
      },
      {
        path: 'bufferTime',
        title: 'bufferTime',
        component: BufferTimeComponent,
      },
      {
        path: 'concatMap',
        title: 'concatMap',
        component: ConcatMapComponent,
      },
      {
        path: 'map',
        title: 'map',
        component: MapComponent,
      },
      {
        path: 'flatMap',
        title: 'flatMap',
        component: FlatMapComponent,
      },
      {
        path: 'mergeMap',
        title: 'mergeMap',
        component: MergeMapComponent,
      },
      {
        path: 'scan',
        title: 'scan',
        component: ScanComponent,
      },
      {
        path: 'switchMap',
        title: 'switchMap',
        component: SwitchMapComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransformationRoutingModule {}
