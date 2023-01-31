import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { html, js } from './template';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent {
  public html = html;
  public js = js;

  public result$ = timer(1000, 2000);
}
