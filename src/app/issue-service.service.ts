import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class IssueServiceService {
  readonly headers = new HttpHeaders({
    userID: '1',
  });
  constructor(private http: HttpClient) {}

  getIssueWithId(): Observable<any> {
    const myUrl =
      'https://hu-22-angular-mockapi-urtjok3rza-wl.a.run.app/issue/HU00000000';

    return this.http.get(myUrl, { headers: this.headers }).pipe(
      map((res) => {
        return res;
      }),
      catchError((err) => {
        return throwError(() => new Error(err.message));
      })
    );
  }
}
