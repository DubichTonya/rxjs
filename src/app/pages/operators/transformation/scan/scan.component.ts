import { Component } from '@angular/core';
import { distinctUntilChanged, interval, map, scan, take } from 'rxjs';
import { html, js } from './template';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.scss'],
})
export class ScanComponent {
  public html = html;
  public js = js;

  result$ = interval(1000).pipe(
    take(15),
    scan((a: any[], c) => [...a, c], []),
    distinctUntilChanged()
  );
}
