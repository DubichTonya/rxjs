import { Component } from '@angular/core';
import { html, js } from './template';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.scss'],
})
export class ScanComponent {
  public html = html;
  public js = js;
}
