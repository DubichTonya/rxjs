import { Component } from '@angular/core';
import { html, js } from './template';

@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html',
  styleUrls: ['./behavior-subject.component.scss'],
})
export class BehaviorSubjectComponent {
  public html = html;
  public js = js;
}
