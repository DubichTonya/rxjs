import { Component } from '@angular/core';
import { html, js } from './template';

@Component({
  selector: 'app-finalize',
  templateUrl: './finalize.component.html',
  styleUrls: ['./finalize.component.scss'],
})
export class FinalizeComponent {
  public html = html;
  public js = js;
}
