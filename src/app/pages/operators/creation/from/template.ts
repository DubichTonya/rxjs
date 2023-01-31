export const html = `
<div example class="row">
  <div class="col-4">Массив: {{ arr$ | async }}</div>
  <div class="col-4">Promise: {{ prom$ | async }}</div>
  <div class="col-4">Строка: {{ str$ | async }}</div>
</div>
`;

export const js = `
/** Создается observable из массива */
public arr$ = from([1, 2, 3, 4, 5]).pipe(
  concatMap((e) => {
    // Специально добавлено чтобы можно было увидеть все значения, а не только последнее.
    return of(e).pipe(delay(1000));
  })
);

/** Создается observable из Promise */
public prom$ = from(new Promise((resolve) => resolve('Hello World!')));

/** Создается observable из строки */
public str$ = from('Hello, World!').pipe(
  scan((acc, el) => acc + el, '') // Превращает в строку, без данного оператора выводилось бы только последнее значение.
);
`;
