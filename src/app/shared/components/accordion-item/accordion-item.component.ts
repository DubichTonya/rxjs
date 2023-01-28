import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

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

  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
