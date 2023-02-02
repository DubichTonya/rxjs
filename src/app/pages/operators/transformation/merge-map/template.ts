export const html = `
<div example>{{ result$ | async }}</div>
`;

export const js = `
series1$ = interval(1000)
.pipe(map((val) => val * 10))
.pipe(delay(1500));

series2$ = interval(1000)
.pipe(map((val) => val * 100))
.pipe(delay(1000));

result$ = merge(this.series1$, this.series2$).pipe(
take(15),
scan((acc, el) => acc + el + '  ', '')
);
`;
