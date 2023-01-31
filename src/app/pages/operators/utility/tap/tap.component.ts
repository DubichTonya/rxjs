import { Component } from '@angular/core';
import { html, js } from './template';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss'],
})
export class TapComponent {
  public html = html;
  public js = js;
}
