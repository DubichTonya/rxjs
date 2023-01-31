import { Component } from '@angular/core';
import { html, js } from './template';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.scss'],
})
export class MergeMapComponent {
  public html = html;
  public js = js;
}
