import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DelayComponent } from './delay/delay.component';
import { DoComponent } from './do/do.component';
import { FinalizeComponent } from './finalize/finalize.component';
import { TapComponent } from './tap/tap.component';
import { UtilityComponent } from './utility.component';

const routes: Routes = [
  {
    path: '',
    component: UtilityComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/utility/delay',
      },
      {
        path: 'delay',
        title: 'delay',
        component: DelayComponent,
      },
      {
        path: 'do',
        title: 'do',
        component: DoComponent,
      },
      {
        path: 'finalize',
        title: 'finalize',
        component: FinalizeComponent,
      },
      {
        path: 'tap',
        title: 'tap',
        component: TapComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UtilityRoutingModule {}
