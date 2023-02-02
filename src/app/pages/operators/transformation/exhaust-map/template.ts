export const html = `
<div example>
  <form [formGroup]="productForm" class="mb-3 row">
    <div class="mb-3 col-6">
      <label for="title" class="form-label">Title</label>
      <input
        formControlName="title"
        type="text"
        class="form-control"
        id="title"
        placeholder="title"
      />
    </div>
    <div class="mb-3 col-6">
      <label for="price" class="form-label">Price</label>
      <input
        formControlName="price"
        type="text"
        class="form-control"
        id="price"
        placeholder="price"
      />
    </div>
    <div class="mb-3 col-6">
      <label for="category" class="form-label">Category</label>
      <input
        formControlName="category"
        type="text"
        class="form-control"
        id="category"
        placeholder="category"
      />
    </div>
    <div class="mb-3 col-6">
      <label for="description" class="form-label">Description</label>
      <input
        formControlName="description"
        type="text"
        class="form-control"
        id="description"
        placeholder="description"
      />
    </div>
  </form>
</div>
`;

export const js = `
productForm = this.fb.group({
  id: 1,
  title: '',
  price: '',
  category: '',
  description: '',
});

constructor(private http: HttpClient, private fb: FormBuilder) {}
ngOnInit(): void {
  this.http
    .get('https://fakestoreapi.com/products/1')
    .subscribe((data: any) => {
      const { id, title, price, category, description } = data;
      this.productForm.setValue({
        id,
        title,
        price,
        category,
        description,
      });
    });

  this.productForm.valueChanges
    .pipe(
      delay(5000),
      exhaustMap((e) => {
        return this.http.put('https://fakestoreapi.com/products/' + e.id, {
          ...e,
        });
      })
    )
    .subscribe(() => {});
}
`;
