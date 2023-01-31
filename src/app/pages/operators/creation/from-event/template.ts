export const html = `
<div example class="row">
  <div class="col-4">
    <div class="input-group">
      <input #input type="text" class="form-control" placeholder="search" />
    </div>
  </div>
  <div class="col-4">Результат ввода: {{ result$ | async }}</div>
</div>
`;

export const js = `
public result$!: Observable<string>;

ngAfterViewInit(): void {
  /** создается observable при событии input в поле ввода */
  this.result$ = fromEvent(this.input.nativeElement, 'input')
  .pipe(
    debounceTime(500), // добавляет задержку при выводе сообщений
    map((e: Event) => {
      // трансформирует событие и возвращает значение инпута
      return (e.target as HTMLInputElement).value;
    }),
    distinctUntilChanged() // если предыдущее значение точно такое же как и текущее, то не выводит его
  );
}
`;
