import { Component } from '@angular/core';
import { html, js } from './template';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.scss'],
})
export class ReplaySubjectComponent {
  public html = html;
  public js = js;
}
