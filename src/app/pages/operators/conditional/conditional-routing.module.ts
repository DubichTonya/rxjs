import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConditionalComponent } from './conditional.component';

const routes: Routes = [{ path: '', component: ConditionalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConditionalRoutingModule { }
