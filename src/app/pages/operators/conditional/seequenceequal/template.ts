export const js = `
public keyCount: number = 0;
public keyValue: string = '';
private expectedSequence = from(['q', 'w', 'e', 'r', 't', 'y']);
public result$!: Observable<any>;

ngOnInit(): void {
  this.result$ = fromEvent(document, 'keydown').pipe(
    map((e: any) => e.key), // трансформируем событие
    tap((value) => {
      this.keyValue = value;
      this.keyCount++;
    }),
    bufferCount(6), // вернет значение когда будет 6 эл-тов
    mergeMap((keydown) => {
      return from(keydown).pipe(
        sequenceEqual(this.expectedSequence), // сравниваем удовлетворяет ли значение предыдущего потока нашему условию
        tap(() => {
          this.keyCount = 0;
          this.keyValue = '';
        }),
        map((isItQwerty) => (isItQwerty ? 'WELL DONE!' : 'TYPE AGAIN!'))
      );
    })
  );
}
`;

export const html = `
<div class="row">
  <div class="col-6">Напечатайте слово "qwerty".</div>
  <div class="col-6">Вы ввели ({{ keyCount }} значений): {{ keyValue }}</div>
  <div class="col-12">{{ result$ | async }}</div>
</div>
`;
