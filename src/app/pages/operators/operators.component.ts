import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss'],
})
export class OperatorsComponent implements OnInit {
  private path: string = '/operators/combination/';
  public accordionLinkHeight: number = 44;
  public mapOfOperators = new Map([
    [
      'combination',
      [
        ['combineLatest', this.path + 'combineLatest'],
        ['concat', this.path + 'concat'],
        ['forkJoin', this.path + 'forkJoin'],
        ['merge', this.path + 'merge'],
        ['startWith', this.path + 'startWith'],
        ['withLatestFrom', this.path + 'withLatestFrom'],
      ],
    ],
  ]);
  public open: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.open = this.router.url.includes(this.path);
  }
}
