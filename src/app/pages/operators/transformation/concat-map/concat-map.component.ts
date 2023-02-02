import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { concatMap, delay, from, tap } from 'rxjs';
import { html, js } from './template';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.scss'],
})
export class ConcatMapComponent {
  public html = html;
  public js = js;

  source1$ = this.http.get('https://fakestoreapi.com/users/1');
  source2$ = this.http
    .get('https://fakestoreapi.com/users/2')
    .pipe(delay(2000));
  source3$ = this.http
    .get('https://fakestoreapi.com/users/3')
    .pipe(delay(2000));

  sources$: any = from([this.source1$, this.source2$, this.source3$]).pipe(
    concatMap((v) => {
      return v;
    })
  );
  constructor(private http: HttpClient) {}
}
