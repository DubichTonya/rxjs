export const js = `
public emptyObservable$ = of();
public result$!: Observable<string>;

ngOnInit(): void {
  this.result$ = this.emptyObservable$.pipe(
    defaultIfEmpty('Observable.of() Empty!')
  );
}
`;

export const html = `
<div class="row">
  <div class="col">{{ result$ | async }}</div>
</div>
`;
