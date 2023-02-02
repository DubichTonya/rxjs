export const html = `
<div example class="row">
  <span class="col-12" *ngFor="let item of source$ | async">
    Имя: {{ item?.name }}. Полных лет: {{ item?.age }}
  </span>
</div>
`;

export const js = `
public source$ = from([
  { name: 'Joe', age: 31 },
  { name: 'Juana', age: 17 },
  { name: 'Bob', age: 25 },
]).pipe(
  filter((person) => person.age >= 25),
  scan((a: any[], c) => [...a, c], [])
);
`;
