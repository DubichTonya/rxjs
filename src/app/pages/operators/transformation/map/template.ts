export const html = `
<div example *ngFor="let item of request$ | async">
  Id: {{ item?.id }} Name: {{ item?.username }} Access: {{ item?.hasAccess }}
</div>
`;

export const js = `
request$ = this.http.get('https://fakestoreapi.com/users?limit=5').pipe(
  map((user: any) => {
    for (let index = 0; index < user.length; index++) {
      user[index].hasAccess = !!(index % 2);
    }
    return user;
  }),
  shareReplay()
);
`;
