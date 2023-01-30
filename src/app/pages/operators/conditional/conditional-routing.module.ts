import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConditionalComponent } from './conditional.component';
import { DefaultEmptyComponent } from './default-empty/default-empty.component';
import { EveryComponent } from './every/every.component';
import { IifComponent } from './iif/iif.component';
import { SeequenceequalComponent } from './seequenceequal/seequenceequal.component';

const routes: Routes = [
  {
    path: '',
    component: ConditionalComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/conditional/defaultEmpty',
      },
      {
        path: 'defaultEmpty',
        title: 'defaultEmpty',
        component: DefaultEmptyComponent,
      },
      {
        path: 'every',
        title: 'every',
        component: EveryComponent,
      },
      {
        path: 'sequenceequal',
        title: 'sequenceequal',
        component: SeequenceequalComponent,
      },
      {
        path: 'iif',
        title: 'iff',
        component: IifComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConditionalRoutingModule {}
