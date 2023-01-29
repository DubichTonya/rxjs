import { Component, OnInit } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  Subject,
  tap,
  withLatestFrom,
} from 'rxjs';
import { js, html } from './template';

@Component({
  selector: 'app-with-latest-from',
  templateUrl: './with-latest-from.component.html',
  styleUrls: ['./with-latest-from.component.scss'],
})
export class WithLatestFromComponent implements OnInit {
  public js: string = js;
  public html: string = html;
  public frameworkList = ['Spring boot', 'Laravel', 'Angular', 'React'];
  public colorList = ['red', 'white', 'black'];

  private frameworkListSubject = new Subject<string>();
  private colorListSubject = new Subject<string>();

  public result$!: Observable<Array<string>>;

  ngOnInit(): void {
    this.result$ = this.frameworkListSubject.pipe(
      withLatestFrom(this.colorListSubject)
    );
  }

  frameworkChoose($event: Event): void {
    this.frameworkListSubject.next(($event.target as HTMLInputElement).value);
  }

  colorChoose($event: Event): void {
    this.colorListSubject.next(($event.target as HTMLInputElement).value);
  }
}
