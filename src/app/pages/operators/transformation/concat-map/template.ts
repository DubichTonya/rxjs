export const html = `
<div example>{{ sources$ | async | json }}</div>
`;

export const js = `
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
`;
