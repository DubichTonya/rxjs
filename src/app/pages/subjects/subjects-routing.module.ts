import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';

import { AsyncSubjectComponent } from './async-subject/async-subject.component';
import { BehaviorSubjectComponent } from './behavior-subject/behavior-subject.component';
import { SubjectComponent } from './subject/subject.component';
import { SubjectsComponent } from './subjects.component';

const routes: Routes = [
  {
    path: '',
    component: SubjectsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/subjects/asyncSubject',
      },
      {
        path: 'asyncSubject',
        title: 'asyncSubject',
        component: AsyncSubjectComponent,
      },
      {
        path: 'behaviorSubject',
        title: 'behaviorSubject',
        component: BehaviorSubjectComponent,
      },
      {
        path: 'replaySubject',
        title: 'replaySubject',
        component: ReplaySubjectComponent,
      },
      {
        path: 'subject',
        title: 'subject',
        component: SubjectComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubjectsRoutingModule {}
