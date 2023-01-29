export const js = `
export class ForkJoinService {
  private api = 'https://api.github.com/users';
  private google = '/google';
  private microsoft = '/microsoft';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(this.api);
  }

  getGoogleUsers(): Observable<any> {
    return this.http.get(this.api + this.google);
  }

  getMicrosoftUsers(): Observable<any> {
    return this.http.get(this.api + this.microsoft);
  }
}

export class ForkJoinComponent implements OnInit {
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
`;

export const html = `
<div class="row">
<div [style.height.px]="80" class="col-2">
  <img [src]="(avatars$ | async)?.google" alt="google" />
</div>
<div [style.height.px]="80" class="col-2">
  <img [src]="(avatars$ | async)?.microsoft" alt="microsoft" />
</div>
<div [style.height.px]="80" class="col-2">
  <img [src]="(avatars$ | async)?.user" alt="user" />
</div>
</div>
`;
