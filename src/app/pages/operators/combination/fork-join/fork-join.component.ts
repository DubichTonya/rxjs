import { Component, OnInit } from '@angular/core';
import { empty, forkJoin, from, Observable, of, switchMap } from 'rxjs';
import { ForkJoinService } from './fork-join.service';
import { html, js } from './template';

@Component({
  selector: 'app-fork-join',
  templateUrl: './fork-join.component.html',
  styleUrls: ['./fork-join.component.scss'],
})
export class ForkJoinComponent implements OnInit {
  public js: string = js;
  public html: string = html;
  public avatars$!: Observable<any>;

  constructor(private forkJoinService: ForkJoinService) {}
  ngOnInit(): void {
    this.avatars$ = forkJoin(
      this.forkJoinService.getGoogleUsers(),
      this.forkJoinService.getMicrosoftUsers(),
      this.forkJoinService.getUsers()
    ).pipe(
      switchMap(([google, microsoft, users]) => {
        return of<any>({
          google: google.avatar_url,
          microsoft: microsoft.avatar_url,
          user: users[0].avatar_url,
        });
      })
    );
  }
}
