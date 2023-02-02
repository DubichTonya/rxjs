export const html = `
<div example>Вывод: {{ source$ | async }}</div>
`;

export const js = `
public source$ = from([
  { name: 'Brian' },
  { name: 'Joe' },
  { name: 'Joe' },
  { name: 'Sue' },
]).pipe(
  distinctUntilKeyChanged('name'),
  map((s) => s.name),
  scan((acc, el) => acc + el + ' ', '')
);
`;
