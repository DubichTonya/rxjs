import { Component, OnInit } from '@angular/core';
import { defaultIfEmpty, Observable, of } from 'rxjs';
import { html, js } from './template';

@Component({
  selector: 'app-default-empty',
  templateUrl: './default-empty.component.html',
  styleUrls: ['./default-empty.component.scss'],
})
export class DefaultEmptyComponent implements OnInit {
  public js: string = js;
  public html: string = html;

  public emptyObservable$ = of();
  public result$!: Observable<string>;

  ngOnInit(): void {
    this.result$ = this.emptyObservable$.pipe(
      defaultIfEmpty('Observable.of() Empty!')
    );
  }
}
