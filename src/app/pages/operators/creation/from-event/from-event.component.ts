import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  map,
  Observable,
  tap,
} from 'rxjs';
import { html, js } from './template';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss'],
})
export class FromEventComponent implements AfterViewInit {
  public html = html;
  public js = js;

  @ViewChild('input')
  input!: ElementRef<HTMLInputElement>;

  public result$!: Observable<string>;

  ngAfterViewInit(): void {
    this.result$ = fromEvent(this.input.nativeElement, 'input').pipe(
      debounceTime(500), // добавляет задержку при выводе сообщений
      map((e: Event) => {
        // трансформирует событие и возвращает значение инпута
        return (e.target as HTMLInputElement).value;
      }),
      distinctUntilChanged() // если предыдущее значение точно такое же как и текущее, то не выводит его
    );
  }
}
