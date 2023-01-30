import { Component, OnInit } from '@angular/core';
import { concat, delay, every, map, Observable, of } from 'rxjs';
import { js, html } from './template';

@Component({
  selector: 'app-every',
  templateUrl: './every.component.html',
  styleUrls: ['./every.component.scss'],
})
export class EveryComponent implements OnInit {
  public js: string = js;
  public html: string = html;

  private returnCode = (request: any) =>
    Number.isInteger(request) ? 200 : 400;
  public result$!: Observable<string>;
  private invalidValue: string = 'Not integer';

  ngOnInit(): void {
    this.setResult(this.invalidValue);
  }

  private setResult(value: any) {
    this.result$ = concat(
      // следующий Observable выполняются после того как завершился предыдущий
      this.fakeRequest(1),
      this.fakeRequest(value),
      this.fakeRequest(2)
    ).pipe(
      every((e) => e.code === 200), // проверяет, что запросы имеют успешный статус
      map((valid) => `All request is success: ${valid}`) // трансформирует результат в строку
    );
  }

  /** Создает фейковый запрос, если аргумент целое число возвращает код 200 иначе 400 */
  private fakeRequest(request: any) {
    return of({ code: this.returnCode(request) }).pipe(delay(1000));
  }

  /** Меняем невалидное значение */
  public changeRequest() {
    this.setResult(5);
  }
}
