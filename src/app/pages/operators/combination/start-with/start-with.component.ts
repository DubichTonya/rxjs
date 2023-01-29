import { Component, OnInit } from '@angular/core';
import { delay, Observable, of, scan, startWith } from 'rxjs';
import { js, html } from './template';

@Component({
  selector: 'app-start-with',
  templateUrl: './start-with.component.html',
  styleUrls: ['./start-with.component.scss'],
})
export class StartWithComponent implements OnInit {
  public js: string = js;
  public html: string = html;

  public result$!: Observable<string>;
  private observable$ = of('World! ', 'Goodbye, ', 'World!');

  ngOnInit(): void {
    this.result$ = this.observable$.pipe(
      startWith('Hello, '),
      scan((acc, el) => acc + el, '')
    );
  }
}
