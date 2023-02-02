import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map, of, shareReplay, switchMap } from 'rxjs';
import { html, js } from './template';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  public html = html;
  public js = js;

  constructor(private http: HttpClient) {}
  request$ = this.http.get('https://fakestoreapi.com/users?limit=5').pipe(
    map((user: any) => {
      for (let index = 0; index < user.length; index++) {
        user[index].hasAccess = !!(index % 2);
      }
      return user;
    }),
    shareReplay()
  );
}
