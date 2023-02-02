import { Component } from '@angular/core';
import {
  catchError,
  interval,
  map,
  mergeMap,
  of,
  retry,
  switchMap,
  take,
  throwError,
} from 'rxjs';
import { html, js } from './template';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss'],
})
export class RetryComponent {
  public html = html;
  public js = js;

  public result$ = interval(1000).pipe(
    mergeMap((val) => {
      if (val > 5) {
        return throwError('Error!'); // создаст ошибку если значение больше 5
      }
      return of(val);
    }),
    retry(2), // попытается повторить 2 раза, если последняя попытка будет неудачной выкинет ошибку
    catchError(() => {
      return of('Ошибка произошла более 2 раз. Запрос завершен'); // обработка ошибки
    })
  );
}
