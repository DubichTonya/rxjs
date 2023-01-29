import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CombinationRoutingModule } from './combination-routing.module';
import { CombinationComponent } from './combination.component';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';
import { ConcatComponent } from './concat/concat.component';
import { ForkJoinComponent } from './fork-join/fork-join.component';
import { MergeComponent } from './merge/merge.component';
import { StartWithComponent } from './start-with/start-with.component';
import { WithLatestFromComponent } from './with-latest-from/with-latest-from.component';

@NgModule({
  declarations: [
    CombinationComponent,
    CombineLatestComponent,
    ConcatComponent,
    ForkJoinComponent,
    MergeComponent,
    StartWithComponent,
    WithLatestFromComponent,
  ],
  imports: [CommonModule, CombinationRoutingModule],
})
export class CombinationModule {}
