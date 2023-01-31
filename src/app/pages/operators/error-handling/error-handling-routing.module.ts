import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatchErrorComponent } from './catch-error/catch-error.component';
import { ErrorHandlingComponent } from './error-handling.component';
import { RetryComponent } from './retry/retry.component';

const routes: Routes = [
  {
    path: '',
    component: ErrorHandlingComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/errorHandling/catchError',
      },
      {
        path: 'catchError',
        title: 'catchError',
        component: CatchErrorComponent,
      },
      {
        path: 'retry',
        title: 'retry',
        component: RetryComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorHandlingRoutingModule {}
