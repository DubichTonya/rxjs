import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, share, shareReplay } from 'rxjs';
import { ProductInterface } from 'src/app/shared/interfaces/product.interface';
import { html, js } from './template';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss'],
})
export class ShareComponent implements OnInit {
  public html = html;
  public js = js;

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
}
