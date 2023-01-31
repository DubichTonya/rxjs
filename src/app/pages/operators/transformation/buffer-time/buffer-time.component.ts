import { Component } from '@angular/core';
import { html, js } from './template';

@Component({
  selector: 'app-buffer-time',
  templateUrl: './buffer-time.component.html',
  styleUrls: ['./buffer-time.component.scss'],
})
export class BufferTimeComponent {
  public html = html;
  public js = js;
}
