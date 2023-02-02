import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DebounceTimeComponent } from './debounce-time/debounce-time.component';
import { DistinctUntilChangedComponent } from './distinct-until-changed/distinct-until-changed.component';
import { DistinctUntilKeyChangedComponent } from './distinct-until-key-changed/distinct-until-key-changed.component';
import { FilterComponent } from './filter/filter.component';
import { FilteringComponent } from './filtering.component';
import { TakeUntilComponent } from './take-until/take-until.component';
import { TakeComponent } from './take/take.component';

const routes: Routes = [
  {
    path: '',
    component: FilteringComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/filtering/debounceTime',
      },
      {
        path: 'debounceTime',
        title: 'debounceTime',
        component: DebounceTimeComponent,
      },
      {
        path: 'distinctUntilChanged',
        title: 'distinctUntilChanged',
        component: DistinctUntilChangedComponent,
      },
      {
        path: 'distinctUntilKeyChanged',
        title: 'distinctUntilKeyChanged',
        component: DistinctUntilKeyChangedComponent,
      },
      {
        path: 'filter',
        title: 'filter',
        component: FilterComponent,
      },
      // {
      //   path: 'take',
      //   title: 'take',
      //   component: TakeComponent,
      // },
      // {
      //   path: 'takeUntil',
      //   title: 'takeUntil',
      //   component: TakeUntilComponent,
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilteringRoutingModule {}
