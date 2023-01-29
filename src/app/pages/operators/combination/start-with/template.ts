export const js = `
public result$!: Observable<string>;
private observable$ = of('World! ', 'Goodbye, ', 'World!');

ngOnInit(): void {
  this.result$ = this.observable$.pipe(
    startWith('Hello, '),
    scan((acc, el) => acc + el, '')
  );
}
`;

export const html = `
<div class="row" [style.min-height.px]="30">
  <div class="col">{{ result$ | async }}</div>
</div>
`;
