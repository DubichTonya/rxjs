import { Component } from '@angular/core';
import { html, js } from './template';

@Component({
  selector: 'app-take-until',
  templateUrl: './take-until.component.html',
  styleUrls: ['./take-until.component.scss'],
})
export class TakeUntilComponent {
  public html = html;
  public js = js;
}
