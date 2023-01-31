export const html = `
<div example>Результат: {{ result$ | async }}</div>
`;

export const js = `
public result$ = timer(1000, 2000);
`;
