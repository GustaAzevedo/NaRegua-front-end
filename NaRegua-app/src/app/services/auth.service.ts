import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

const apiUrlInfoGES = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;
  localhttp: HttpClient;

  constructor(private httpClient: HttpClient, private cookieService: CookieService) {
    this.localhttp = httpClient;
  }

  auth(ticket: string): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      })
    };
    return this.httpClient.get(apiUrlInfoGES + 'auth/' + ticket, httpOptions);
  }

}
