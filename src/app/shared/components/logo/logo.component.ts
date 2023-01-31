import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  imports: [RouterModule],
  standalone: true,
})
export class LogoComponent {
  @Input()
  className: string = '';
}
