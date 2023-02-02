import { Component } from '@angular/core';
import {
  delay,
  distinctUntilChanged,
  distinctUntilKeyChanged,
  from,
  map,
  scan,
  tap,
} from 'rxjs';
import { html, js } from './template';

@Component({
  selector: 'app-distinct-until-key-changed',
  templateUrl: './distinct-until-key-changed.component.html',
  styleUrls: ['./distinct-until-key-changed.component.scss'],
})
export class DistinctUntilKeyChangedComponent {
  public html = html;
  public js = js;

  public source$ = from([
    { name: 'Brian' },
    { name: 'Joe' },
    { name: 'Joe' },
    { name: 'Sue' },
  ]).pipe(
    distinctUntilKeyChanged('name'),
    map((s) => s.name),
    scan((acc, el) => acc + el + ' ', '')
  );
}
