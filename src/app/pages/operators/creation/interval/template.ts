export const html = `
<div example>Результат: {{ result$ | async }}</div>
`;

export const js = `
public result$ = interval(1500);
`;
