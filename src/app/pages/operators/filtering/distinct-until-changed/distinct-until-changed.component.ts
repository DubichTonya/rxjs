import { Component } from '@angular/core';
import { html, js } from './template';

@Component({
  selector: 'app-distinct-until-changed',
  templateUrl: './distinct-until-changed.component.html',
  styleUrls: ['./distinct-until-changed.component.scss'],
})
export class DistinctUntilChangedComponent {
  public html = html;
  public js = js;
}
