export const html = `
<div example class="row">
  <div class="col-6">
    {{ (product$ | async)?.title }}
  </div>
  <div class="col-6">
    {{ (product2$ | async)?.title }}
  </div>
  <div class="col-6">
    {{ (product$ | async)?.price }}
  </div>
  <div class="col-6">
    {{ (product2$ | async)?.price }}
  </div>
  <div *ngIf="isShowCategory" class="col-6">
    {{ (product$ | async)?.category }}
  </div>
  <div *ngIf="isShowCategory" class="col-6">
    {{ (product2$ | async)?.category }}
  </div>
</div>
`;

export const js = `
public product$: Observable<ProductInterface> = this.http
.get<ProductInterface>('https://fakestoreapi.com/products/1')
.pipe(share());

public product2$: Observable<ProductInterface> = this.http
.get<ProductInterface>('https://fakestoreapi.com/products/2')
.pipe(shareReplay());

public isShowCategory = false;

constructor(private http: HttpClient) {}

ngOnInit(): void {
setTimeout(() => (this.isShowCategory = true), 3000);
}
`;
