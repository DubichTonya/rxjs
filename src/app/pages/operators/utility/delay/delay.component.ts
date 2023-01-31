import { Component } from '@angular/core';
import { html, js } from './template';

@Component({
  selector: 'app-delay',
  templateUrl: './delay.component.html',
  styleUrls: ['./delay.component.scss'],
})
export class DelayComponent {
  public html = html;
  public js = js;
}
