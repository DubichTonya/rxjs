import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperatorsComponent } from './operators.component';

const routes: Routes = [
  {
    path: '',
    component: OperatorsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/operators/combination/combineLatest',
      },
      {
        path: 'combination',
        loadChildren: () => import('./combination/combination.module').then((m) => m.CombinationModule),
      },
      {
        path: 'conditional',
        loadChildren: () => import('./conditional/conditional.module').then((m) => m.ConditionalModule),
      },
      { path: 'creation', loadChildren: () => import('./creation/creation.module').then((m) => m.CreationModule) },
      {
        path: 'errorHandling',
        loadChildren: () => import('./error-handling/error-handling.module').then((m) => m.ErrorHandlingModule),
      },
      {
        path: 'multicasting',
        loadChildren: () => import('./multicasting/multicasting.module').then((m) => m.MulticastingModule),
      },
      {
        path: 'filtering',
        loadChildren: () => import('./filtering/filtering.module').then((m) => m.FilteringModule),
      },
      {
        path: 'utility',
        loadChildren: () => import('./utility/utility.module').then((m) => m.UtilityModule),
      },
      {
        path: 'transformation',
        loadChildren: () => import('./transformation/transformation.module').then((m) => m.TransformationModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperatorsRoutingModule {}
