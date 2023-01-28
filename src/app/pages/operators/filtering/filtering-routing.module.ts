import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilteringComponent } from './filtering.component';

const routes: Routes = [{ path: '', component: FilteringComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilteringRoutingModule { }
