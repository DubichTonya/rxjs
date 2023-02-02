import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { delay, exhaustMap, Subject, switchMap, takeUntil } from 'rxjs';
import { html, js } from './template';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss'],
})
export class SwitchMapComponent {
  public html = html;
  public js = js;

  productForm = this.fb.group({
    id: 1,
    title: '',
    price: '',
    category: '',
    description: '',
  });

  private destroy$ = new Subject<void>();

  constructor(private http: HttpClient, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.http
      .get('https://fakestoreapi.com/products/1')
      .pipe(takeUntil(this.destroy$))
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
        switchMap((e) => {
          return this.http.put('https://fakestoreapi.com/products/' + e.id, {
            ...e,
          });
        })
      )
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {});
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
