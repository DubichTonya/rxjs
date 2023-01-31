import { Component } from '@angular/core';
import { html, js } from './template';

@Component({
  selector: 'app-distinct-until-key-changed',
  templateUrl: './distinct-until-key-changed.component.html',
  styleUrls: ['./distinct-until-key-changed.component.scss'],
})
export class DistinctUntilKeyChangedComponent {
  public html = html;
  public js = js;
}
