import { Component } from '@angular/core';
import { html, js } from './template';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.scss'],
})
export class ConcatMapComponent {
  public html = html;
  public js = js;
}
