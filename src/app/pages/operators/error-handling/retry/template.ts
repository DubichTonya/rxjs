export const html = `
<div example>
  {{ result$ | async }}
</div>
`;

export const js = `
public result$ = interval(1000).pipe(
  mergeMap((val) => {
    if (val > 5) {
      return throwError('Error!'); // создаст ошибку если значение больше 5
    }
    return of(val);
  }),
  retry(2), // попытается повторить 2 раза, если последняя попытка будет неудачной выкинет ошибку
  catchError(() => {
    return of('Ошибка произошла более 2 раз. Запрос завершен'); // обработка ошибки
  })
);
`;
