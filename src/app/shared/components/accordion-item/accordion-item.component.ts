import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { AccordionItemEventInterface } from './accordion-items.interface';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss'],
  standalone: true,
})
export class AccordionItemComponent {
  @Input()
  height: number = 200;

  @Input()
  title!: string;

  @Input()
  open: boolean = false;

  @Output()
  openChange: EventEmitter<AccordionItemEventInterface> =
    new EventEmitter<AccordionItemEventInterface>();

  toggle() {
    this.open = !this.open;
    this.openChange.emit({ open: this.open, title: this.title });
  }
}
