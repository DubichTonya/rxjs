import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MulticastingComponent } from './multicasting.component';
import { ShareReplyComponent } from './share-reply/share-reply.component';
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
      {
        path: 'shareReplay',
        title: 'shareReplay',
        component: ShareReplyComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MulticastingRoutingModule {}
