import { Component, OnInit } from '@angular/core';
import {
  of,
  fromEvent,
  throttleTime,
  filter,
  map,
  mergeMap,
  iif,
  Observable,
  tap,
} from 'rxjs';
import { js, html } from './template';

@Component({
  selector: 'app-iif',
  templateUrl: './iif.component.html',
  styleUrls: ['./iif.component.scss'],
})
export class IifComponent implements OnInit {
  public js: string = js;
  public html: string = html;

  private r$ = of(`I'm saying R!!`);
  private x$ = of(`X's always win!!`);
  public result$!: Observable<string>;
  public clientY!: number;

  ngOnInit(): void {
    this.result$ = fromEvent(document, 'mousemove').pipe(
      throttleTime(50),
      tap((e: any) => (this.clientY = e.clientY)),
      filter((move: any) => move.clientY < 210),
      map((move: MouseEvent) => move.clientY),
      mergeMap((yCoord) => iif(() => yCoord < 110, this.r$, this.x$))
    );
  }
}
