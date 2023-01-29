import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { combineLatest, fromEvent, map, scan, startWith, Subject, takeUntil } from 'rxjs';
import { html, js } from './template';

interface InfoInterface {
  redTotal: number;
  blackTotal: number;
  total: number;
}

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.scss'],
})
export class CombineLatestComponent implements AfterViewInit {
  /** Получаем доступ к элементам */
  @ViewChild('redBtn')
  redBtn!: ElementRef<HTMLElement>;
  @ViewChild('blackBtn')
  blackBtn!: ElementRef<HTMLElement>;

  /** Необходим для управления завершением подписки */
  private destroy$ = new Subject<void>();
  html = html;
  js = js;

  info: InfoInterface = {
    redTotal: 0,
    blackTotal: 0,
    total: 0,
  };

  ngAfterViewInit(): void {
    combineLatest(this.addOnClick$(this.redBtn), this.addOnClick$(this.blackBtn))
      .pipe(takeUntil(this.destroy$))
      .subscribe(([redCounter, blackCounter]) => {
        this.info = {
          redTotal: redCounter,
          blackTotal: blackCounter,
          total: redCounter + blackCounter,
        };
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  addOnClick$(elRef: ElementRef) {
    return fromEvent(elRef.nativeElement, 'click').pipe(
      map(() => 1), // трансформирует событие клика в значение 1
      scan((acc, curr) => acc + curr, 0), // суммирует кол-во кликов
      startWith(0) // необходимо как стартовое значение для обеих кнопок. если его не использовать, то combineLatest будет ждать пока вы нажмете на обе кнопки.
    );
  }
}
