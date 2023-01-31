import { Component } from '@angular/core';
import { html, js } from './template';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.scss'],
})
export class AsyncSubjectComponent {
  public html = html;
  public js = js;
}
