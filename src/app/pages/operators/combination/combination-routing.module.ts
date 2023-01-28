import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CombinationComponent } from './combination.component';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';

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
        component: CombineLatestComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CombinationRoutingModule {}
