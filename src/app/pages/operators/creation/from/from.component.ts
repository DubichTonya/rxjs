import { Component } from '@angular/core';
import { concatMap, delay, from, of, scan } from 'rxjs';
import { html, js } from './template';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.scss'],
})
export class FromComponent {
  public html = html;
  public js = js;
  /** Создается observable из массива */
  public arr$ = from([1, 2, 3, 4, 5]).pipe(
    concatMap((e) => {
      // Специально добавлено чтобы можно было увидеть все значения, а не только последнее.
      return of(e).pipe(delay(1000));
    })
  );

  /** Создается observable из Promise */
  public prom$ = from(new Promise((resolve) => resolve('Hello World!')));

  /** Создается observable из строки */
  public str$ = from('Hello, World!').pipe(
    scan((acc, el) => acc + el, '') // Превращает в строку, без данного оператора выводилось бы только последнее значение.
  );
}
