import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CombinationComponent } from './combination.component';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';
import { ConcatComponent } from './concat/concat.component';
import { ForkJoinComponent } from './fork-join/fork-join.component';
import { MergeComponent } from './merge/merge.component';
import { StartWithComponent } from './start-with/start-with.component';
import { WithLatestFromComponent } from './with-latest-from/with-latest-from.component';

const routes: Routes = [
  {
    path: '',
    component: CombinationComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/operators/combination/combineLatest',
      },
      {
        path: 'combineLatest',
        title: 'combineLatest',
        component: CombineLatestComponent,
      },
      {
        path: 'concat',
        title: 'concat',
        component: ConcatComponent,
      },
      {
        path: 'forkJoin',
        title: 'forkJoin',
        component: ForkJoinComponent,
      },
      {
        path: 'merge',
        title: 'merge',
        component: MergeComponent,
      },
      {
        path: 'startWith',
        title: 'startWith',
        component: StartWithComponent,
      },
      {
        path: 'withLatestFrom',
        title: 'withLatestFrom',
        component: WithLatestFromComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CombinationRoutingModule {}
