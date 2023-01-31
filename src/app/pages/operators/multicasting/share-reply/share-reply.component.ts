import { Component } from '@angular/core';
import { html, js } from './template';

@Component({
  selector: 'app-share-reply',
  templateUrl: './share-reply.component.html',
  styleUrls: ['./share-reply.component.scss'],
})
export class ShareReplyComponent {
  public html = html;
  public js = js;
}
