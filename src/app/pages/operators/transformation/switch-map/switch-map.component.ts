import { Component } from '@angular/core';
import { html, js } from './template';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss'],
})
export class SwitchMapComponent {
  public html = html;
  public js = js;
}
