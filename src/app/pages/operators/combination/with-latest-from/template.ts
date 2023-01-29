export const js = `
public frameworkList = ['Spring boot', 'Laravel', 'Angular', 'React'];
public colorList = ['red', 'white', 'black'];

private frameworkListSubject = new Subject<string>();
private colorListSubject = new Subject<string>();

public result$!: Observable<Array<string>>;

ngOnInit() {
  this.result$ = this.frameworkListSubject.pipe(
    withLatestFrom(this.colorListSubject)
  );
}

frameworkChoose($event: Event): void {
  this.frameworkListSubject.next(($event.target as HTMLInputElement).value);
}

colorChoose($event: Event): void {
  this.colorListSubject.next(($event.target as HTMLInputElement).value);
}
`;

export const html = `
<div class="row">
  <div class="col-6">
    <label>Framework</label>
    <select class="form-select" (change)="frameworkChoose($event)">
      <option *ngFor="let item of frameworkList" [value]="item">
        {{ item }}
      </option>
    </select>
    <br />
    <label for="">Color</label>
    <select class="form-select" (change)="colorChoose($event)">
      <option *ngFor="let item of colorList" [value]="item">
        {{ item }}
      </option>
    </select>
  </div>
  <div class="col-6 d-flex align-items-center justify-content-center">
    {{ result$ | async }}
  </div>
</div>
`;
