import { Component } from '@angular/core';
import { html, js } from './template';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  public html = html;
  public js = js;
}
