import { Component } from '@angular/core';
import { html, js } from './template';

@Component({
  selector: 'app-flat-map',
  templateUrl: './flat-map.component.html',
  styleUrls: ['./flat-map.component.scss'],
})
export class FlatMapComponent {
  public html = html;
  public js = js;
}
