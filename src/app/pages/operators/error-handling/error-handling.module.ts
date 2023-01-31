import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorHandlingRoutingModule } from './error-handling-routing.module';
import { ErrorHandlingComponent } from './error-handling.component';
import { CatchErrorComponent } from './catch-error/catch-error.component';
import { RetryComponent } from './retry/retry.component';


@NgModule({
  declarations: [
    ErrorHandlingComponent,
    CatchErrorComponent,
    RetryComponent
  ],
  imports: [
    CommonModule,
    ErrorHandlingRoutingModule
  ]
})
export class ErrorHandlingModule { }
