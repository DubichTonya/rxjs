import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { AccordionItemEventInterface } from 'src/app/shared/components/accordion-item/accordion-items.interface';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss'],
})
export class OperatorsComponent implements OnInit {
  private pathCombination: string = '/operators/combination/';
  private pathConditional: string = '/operators/conditional/';
  public accordionLinkHeight: number = 44;
  public mapOfOperators = new Map([
    [
      'combination',
      [
        ['combineLatest', this.pathCombination + 'combineLatest'],
        ['concat', this.pathCombination + 'concat'],
        ['forkJoin', this.pathCombination + 'forkJoin'],
        ['merge', this.pathCombination + 'merge'],
        ['startWith', this.pathCombination + 'startWith'],
        ['withLatestFrom', this.pathCombination + 'withLatestFrom'],
      ],
    ],
    [
      'conditional',
      [
        ['defaultEmpty', this.pathConditional + 'defaultEmpty'],
        ['every', this.pathConditional + 'every'],
        ['sequenceequal', this.pathConditional + 'sequenceequal'],
        ['iif', this.pathConditional + 'iif'],
      ],
    ],
  ]);

  openConditions = new Map([
    ['combination', false],
    ['conditional', false],
  ]);

  constructor(private router: Router) {}
  ngOnInit(): void {}

  openChange($event: AccordionItemEventInterface): void {
    const { open, title } = $event;
    if (this.openConditions.has(title)) {
      this.openConditions.set(title, open);
    }
  }

  isOpen(title: string): boolean {
    if (
      this.router.url.includes(title) &&
      this.openConditions.has(title) &&
      !this.openConditions.get(title)
    ) {
      this.openConditions.set(title, true);
    }
    return !!(
      this.router.url.includes(title) || this.openConditions.get(title)
    );
  }
}
