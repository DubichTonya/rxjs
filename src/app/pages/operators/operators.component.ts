import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccordionItemEventInterface } from 'src/app/shared/components/accordion-item/accordion-items.interface';
import { mapOfOperators } from './operators.const';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss'],
})
export class OperatorsComponent implements OnInit {
  public accordionLinkHeight: number = 44;
  public mapOfOperators = mapOfOperators;

  openConditions = new Map([
    ['combination', false],
    ['conditional', false],
    ['creation', false],
    ['errorHandling', false],
    ['filtering', false],
    ['multicasting', false],
    ['transformation', false],
    ['utility', false],
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
