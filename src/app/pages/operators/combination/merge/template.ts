export const js = `
private first = interval(2500);
private second = interval(2000);
private third = interval(1500);
private fourth = interval(1000);

public result$!: Observable<string>;

ngOnInit(): void {
  this.result$ = merge(
    this.first.pipe(
      map(() => 'First ') // Трансформирует значение
    ),
    this.second.pipe(map(() => 'Second ')),
    this.third.pipe(map(() => 'Third ')),
    this.fourth.pipe(map(() => 'Fourth '))
  ).pipe(
    take(10), // Берет только 10 значений
    scan((acc, el) => acc + el, '') // Объединяет значения в одну строку
  );
}
`;

export const html = `
<div class="row">
  <div class="col">{{ result$ | async }}</div>
</div>
`;
