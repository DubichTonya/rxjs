import { Component, OnInit } from '@angular/core';
import { delay, interval, map, merge, scan, take } from 'rxjs';
import { html, js } from './template';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.scss'],
})
export class MergeMapComponent {
  public html = html;
  public js = js;

  series1$ = interval(1000)
    .pipe(map((val) => val * 10))
    .pipe(delay(1500));

  series2$ = interval(1000)
    .pipe(map((val) => val * 100))
    .pipe(delay(1000));

  result$ = merge(this.series1$, this.series2$).pipe(
    take(15),
    scan((acc, el) => acc + el + '  ', '')
  );
}
