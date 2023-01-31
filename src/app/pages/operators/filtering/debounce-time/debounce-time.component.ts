import { Component } from '@angular/core';
import { html, js } from './template';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.scss'],
})
export class DebounceTimeComponent {
  public html = html;
  public js = js;
}
