import { Component } from '@angular/core';
import { catchError, of, throwError } from 'rxjs';
import { html, js } from './template';

@Component({
  selector: 'app-catch-error',
  templateUrl: './catch-error.component.html',
  styleUrls: ['./catch-error.component.scss'],
})
export class CatchErrorComponent {
  public html = html;
  public js = js;

  public result$ = throwError('This is an error!').pipe(
    catchError((val) => of(`I caught: ${val}`))
  );
}
