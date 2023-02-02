import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {
  delay,
  from,
  concatMap,
  exhaustMap,
  map,
  of,
  switchMap,
  Subject,
  takeUntil,
} from 'rxjs';
import { html, js } from './template';

@Component({
  selector: 'app-exhaust-map',
  templateUrl: './exhaust-map.component.html',
  styleUrls: ['./exhaust-map.component.scss'],
})
export class ExhaustMapComponent implements OnInit, OnDestroy {
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
        exhaustMap((e) => {
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
