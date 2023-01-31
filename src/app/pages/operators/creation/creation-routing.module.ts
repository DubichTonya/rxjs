import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreationComponent } from './creation.component';
import { FromEventComponent } from './from-event/from-event.component';
import { FromComponent } from './from/from.component';
import { IntervalComponent } from './interval/interval.component';
import { OfComponent } from './of/of.component';
import { TimerComponent } from './timer/timer.component';

const routes: Routes = [
  {
    path: '',
    component: CreationComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/creation/of',
      },
      {
        path: 'of',
        title: 'of',
        component: OfComponent,
      },
      {
        path: 'from',
        title: 'from',
        component: FromComponent,
      },
      {
        path: 'interval',
        title: 'interval',
        component: IntervalComponent,
      },
      {
        path: 'fromEvent',
        title: 'fromEvent',
        component: FromEventComponent,
      },
      {
        path: 'timer',
        title: 'timer',
        component: TimerComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreationRoutingModule {}
