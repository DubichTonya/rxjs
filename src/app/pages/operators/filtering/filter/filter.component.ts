import { Component } from '@angular/core';
import { filter, from, scan } from 'rxjs';
import { html, js } from './template';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  public html = html;
  public js = js;

  public source$ = from([
    { name: 'Joe', age: 31 },
    { name: 'Juana', age: 17 },
    { name: 'Bob', age: 25 },
  ]).pipe(
    filter((person) => person.age >= 25),
    scan((a: any[], c) => [...a, c], [])
  );
}
