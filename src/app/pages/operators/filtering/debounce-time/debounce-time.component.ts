import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { debounceTime, fromEvent, map, Observable } from 'rxjs';
import { html, js } from './template';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.scss'],
})
export class DebounceTimeComponent implements AfterViewInit {
  public html = html;
  public js = js;

  @ViewChild('searchInput')
  searchInput!: ElementRef<HTMLInputElement>;

  public withoutDebounce$!: Observable<string>;
  public debounce$!: Observable<string>;
  public inputEvent$!: Observable<any>;

  ngAfterViewInit(): void {
    this.inputEvent$ = fromEvent(this.searchInput.nativeElement, 'input');

    this.debounce$ = this.inputEvent$.pipe(
      debounceTime(500),
      map((e) => e.target.value)
    );

    this.withoutDebounce$ = this.inputEvent$.pipe(map((e) => e.target.value));
  }
}
