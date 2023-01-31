import { Component } from '@angular/core';
import { html, js } from './template';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss'],
})
export class ShareComponent {
  public html = html;
  public js = js;
}
