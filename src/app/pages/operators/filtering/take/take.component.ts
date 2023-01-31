import { Component } from '@angular/core';
import { html, js } from './template';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss'],
})
export class TakeComponent {
  public html = html;
  public js = js;
}
