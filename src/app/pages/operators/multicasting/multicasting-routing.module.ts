import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MulticastingComponent } from './multicasting.component';
import { ShareComponent } from './share/share.component';

const routes: Routes = [
  {
    path: '',
    component: MulticastingComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/multicasting/share',
      },
      {
        path: 'share',
        title: 'share',
        component: ShareComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MulticastingRoutingModule {}
