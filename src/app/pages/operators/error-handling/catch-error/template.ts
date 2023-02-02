export const html = `
<div example>
  {{ result$ | async }}
</div>
`;

export const js = `
public result$ = throwError('This is an error!').pipe(
  catchError((val) => of("I caught: " + val))
);
`;
