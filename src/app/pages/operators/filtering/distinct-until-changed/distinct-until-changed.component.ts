import { Component } from '@angular/core';
import {
  from,
  tap,
  delay,
  distinctUntilChanged,
  concatMap,
  of,
  scan,
} from 'rxjs';
import { html, js } from './template';

@Component({
  selector: 'app-distinct-until-changed',
  templateUrl: './distinct-until-changed.component.html',
  styleUrls: ['./distinct-until-changed.component.scss'],
})
export class DistinctUntilChangedComponent {
  public html = html;
  public js = js;

  public source$ = from([1, 1, 2, 2, 3, 3]).pipe(
    distinctUntilChanged(),
    scan((acc, el) => acc + el, '')
  );
}
