import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilteringRoutingModule } from './filtering-routing.module';
import { FilteringComponent } from './filtering.component';
import { DebounceTimeComponent } from './debounce-time/debounce-time.component';
import { DistinctUntilChangedComponent } from './distinct-until-changed/distinct-until-changed.component';
import { DistinctUntilKeyChangedComponent } from './distinct-until-key-changed/distinct-until-key-changed.component';
import { FilterComponent } from './filter/filter.component';
import { TakeComponent } from './take/take.component';
import { TakeUntilComponent } from './take-until/take-until.component';
import { ContentComponent } from 'src/app/shared/components/content/content.component';

@NgModule({
  declarations: [
    FilteringComponent,
    DebounceTimeComponent,
    DistinctUntilChangedComponent,
    DistinctUntilKeyChangedComponent,
    FilterComponent,
    TakeComponent,
    TakeUntilComponent,
  ],
  imports: [CommonModule, FilteringRoutingModule, ContentComponent],
})
export class FilteringModule {}
