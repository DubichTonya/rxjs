import { Component } from '@angular/core';
import { concatMap, delay, of, startWith, tap } from 'rxjs';
import { html, js } from './template';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.scss'],
})
export class OfComponent {
  public html = html;
  public js = js;

  public result$ = of({ name: 'Brian' }, [1, 2, 3]).pipe(
    concatMap((e) => {
      return of(e).pipe(delay(2000));
    })
  );
}
