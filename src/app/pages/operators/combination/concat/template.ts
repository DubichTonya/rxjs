export const js = `
public message: string = '';
private destroy$: Subject<void> = new Subject<void>();

ngOnDestroy(): void {
  this.destroy$.next();
  this.destroy$.complete();
}

private delayedMessage(message: string | number, delayedTime = 1000): Observable<string | number> {
  return empty() // создает пустой Observable
    .pipe(
      startWith(message), // добавляет стартовое значение, так как вначале он пустой
      delay(delayedTime) // добавляется задержка чтобы был перерыв между выводом сообщений
    );
}

onClick(): void {
  concat(
    this.delayedMessage('Get Ready!'),
    this.delayedMessage(3),
    this.delayedMessage(2),
    this.delayedMessage(1),
    this.delayedMessage('Go!'),
    this.delayedMessage('', 2000)
  )
    .pipe(takeUntil(this.destroy$)) // завершается когда проходит по всем Observable, но на всякий случай добавлено доп. условие
    .subscribe((message: any) => {
      this.message = message;
    });
}
`;

export const html = `
<div class="d-flex">
<button type="button" class="btn btn-outline-dark" (click)="onClick()">Start</button>
<div class="d-flex align-items-center justify-content-center flex-grow-1 concat__example">
  {{ message }}
</div>
</div>
`;
