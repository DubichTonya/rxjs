export const html = `
<div example class="row">
  <div class="col-6">
    <input #searchInput placeholder="search" type="text" />
  </div>
  <div class="col-6">
    Результат ввода при debounceTime: {{ debounce$ | async }}
    <br />
    Результат ввода без debounceTime: {{ withoutDebounce$ | async }}
  </div>
</div>
`;

export const js = `
@ViewChild('searchInput')
searchInput!: ElementRef<HTMLInputElement>;

public withoutDebounce$!: Observable<string>;
public debounce$!: Observable<string>;
public inputEvent$!: Observable<any>;

ngAfterViewInit(): void {
  this.inputEvent$ = fromEvent(this.searchInput.nativeElement, 'input');

  this.debounce$ = this.inputEvent$.pipe(
    debounceTime(500),
    map((e) => e.target.value)
  );

  this.withoutDebounce$ = this.inputEvent$.pipe(map((e) => e.target.value));
}
`;
