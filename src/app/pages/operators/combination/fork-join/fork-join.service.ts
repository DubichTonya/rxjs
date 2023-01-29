import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ForkJoinService {
  private api = 'https://api.github.com/users';
  private google = '/google';
  private microsoft = '/microsoft';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(this.api);
  }

  getGoogleUsers(): Observable<any> {
    return this.http.get(this.api + this.google);
  }

  getMicrosoftUsers(): Observable<any> {
    return this.http.get(this.api + this.microsoft);
  }
}
