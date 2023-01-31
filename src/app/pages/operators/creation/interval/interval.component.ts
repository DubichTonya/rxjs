import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { html, js } from './template';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss'],
})
export class IntervalComponent {
  public html = html;
  public js = js;

  public result$ = interval(1500);
}
