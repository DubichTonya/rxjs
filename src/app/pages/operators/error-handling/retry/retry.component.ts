import { Component } from '@angular/core';
import { html, js } from './template';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss'],
})
export class RetryComponent {
  public html = html;
  public js = js;
}
