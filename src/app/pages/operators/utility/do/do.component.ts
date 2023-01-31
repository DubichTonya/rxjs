import { Component } from '@angular/core';
import { html, js } from './template';

@Component({
  selector: 'app-do',
  templateUrl: './do.component.html',
  styleUrls: ['./do.component.scss'],
})
export class DoComponent {
  public html = html;
  public js = js;
}
