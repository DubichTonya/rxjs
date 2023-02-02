export const html = `
<div example [style.min-height.px]="30">
  {{ result$ | async }}
</div>
`;

export const js = `
result$ = interval(1000).pipe(
  take(15),
  scan((a: any[], c) => [...a, c], []),
  distinctUntilChanged()
);
`;
