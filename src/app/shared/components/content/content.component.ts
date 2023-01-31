import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  standalone: true,
})
export class ContentComponent {
  @Input()
  isSubject: boolean = false;

  @Input()
  js: string = '';

  @Input()
  html: string = '';
}
