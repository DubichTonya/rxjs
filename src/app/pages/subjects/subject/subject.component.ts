import { Component } from '@angular/core';
import { html, js } from './template';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss'],
})
export class SubjectComponent {
  public html = html;
  public js = js;
}
