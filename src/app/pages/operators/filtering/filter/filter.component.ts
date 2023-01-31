import { Component } from '@angular/core';
import { html, js } from './template';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  public html = html;
  public js = js;
}
