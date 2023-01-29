import { Component, OnInit } from '@angular/core';
import { interval, merge, map, take, scan, Observable } from 'rxjs';
import { html, js } from './template';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss'],
})
export class MergeComponent implements OnInit {
  public js: string = js;
  public html: string = html;

  private first = interval(2500);
  private second = interval(2000);
  private third = interval(1500);
  private fourth = interval(1000);

  public result$!: Observable<string>;

  ngOnInit(): void {
    this.result$ = merge(
      this.first.pipe(
        map(() => 'First ') // Трансформирует значение
      ),
      this.second.pipe(map(() => 'Second ')),
      this.third.pipe(map(() => 'Third ')),
      this.fourth.pipe(map(() => 'Fourth '))
    ).pipe(
      take(10), // Берет только 10 значений
      scan((acc, el) => acc + el, '') // Объединяет значения в одну строку
    );
  }
}
