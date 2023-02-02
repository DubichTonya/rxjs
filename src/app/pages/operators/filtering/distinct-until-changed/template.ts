export const html = `
<div example>Вывод: {{ source$ | async }}</div>
`;

export const js = `
public source$ = from([1, 1, 2, 2, 3, 3]).pipe(
  distinctUntilChanged(),
  scan((acc, el) => acc + el, '')
);
`;
