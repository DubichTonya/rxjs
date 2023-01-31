export const html = `
<div example>Результат: {{ result$ | async | json }}</div>
`;

export const js = `
public result$ = of({ name: 'Brian' }, [1, 2, 3]).pipe(
  concatMap((e) => {
    return of(e).pipe(delay(2000));
  })
);
`;
