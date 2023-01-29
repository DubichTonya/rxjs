import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  @Input()
  open: boolean = false;

  @Output()
  openChange: EventEmitter<boolean> = new EventEmitter();

  toggle() {
    this.open = !this.open;
    this.openChange.emit(this.open);
  }
}
