import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectsRoutingModule } from './subjects-routing.module';
import { SubjectsComponent } from './subjects.component';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';
import { BehaviorSubjectComponent } from './behavior-subject/behavior-subject.component';
import { SubjectComponent } from './subject/subject.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';

@NgModule({
  declarations: [
    SubjectsComponent,
    AsyncSubjectComponent,
    BehaviorSubjectComponent,
    SubjectComponent,
    ReplaySubjectComponent,
  ],
  imports: [CommonModule, SubjectsRoutingModule],
})
export class SubjectsModule {}
