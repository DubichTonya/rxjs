import { Component, OnInit } from '@angular/core';
import {
  bufferCount,
  from,
  fromEvent,
  map,
  mergeMap,
  Observable,
  of,
  sequenceEqual,
  Subject,
  tap,
} from 'rxjs';
import { html, js } from './template';

@Component({
  selector: 'app-seequenceequal',
  templateUrl: './seequenceequal.component.html',
  styleUrls: ['./seequenceequal.component.scss'],
})
export class SeequenceequalComponent implements OnInit {
  public js: string = js;
  public html: string = html;

  public keyCount: number = 0;
  public keyValue: string = '';
  private expectedSequence = from(['q', 'w', 'e', 'r', 't', 'y']);
  public result$!: Observable<any>;

  ngOnInit(): void {
    this.result$ = fromEvent(document, 'keydown').pipe(
      map((e: any) => e.key), // трансформируем событие
      tap((value) => {
        this.keyValue = value;
        this.keyCount++;
      }),
      bufferCount(6), // вернет значение когда будет 6 эл-тов
      mergeMap((keydown) => {
        return from(keydown).pipe(
          sequenceEqual(this.expectedSequence), // сравниваем удовлетворяет ли значение предыдущего потока нашему условию
          tap(() => {
            this.keyCount = 0;
            this.keyValue = '';
          }),
          map((isItQwerty) => (isItQwerty ? 'WELL DONE!' : 'TYPE AGAIN!'))
        );
      })
    );
  }
}
