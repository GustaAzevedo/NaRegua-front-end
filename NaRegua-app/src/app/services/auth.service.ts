import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { map, catchError } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';

const apiUrlInfoGES = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public token: string;

  constructor(private http: HttpClient, private cookieService: CookieService) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  login(user: any): Observable<any> {

    console.log('entrei no login: ' + user.email + ' - ' + user.password + ' - ' + user.device)

    return this.http.post<any>(apiUrlInfoGES + 'login', user)
      .pipe(
        map(user => {
          // login bem-sucedido se houver um token jwt na resposta
          if (user && user.token) {
            // armazenar detalhes do usuário e token jwt no localStorage para manter o usuário logado entre as atualizações da página
            console.log('Recebeu token')
            localStorage.setItem('currentUser', JSON.stringify(user));
            localStorage.setItem('token', JSON.stringify(user.token));
            localStorage.setItem('user_id', JSON.stringify(user.user_id));
            localStorage.setItem('barbearia_id', JSON.stringify(user.barbearia_id));
          } else {
            console.log('não recebeu token')
          }
          return user;
        })
      );
  }

  logout(): void {
    // Limpa o token removendo o usuário do local store para efetuar o logout
    this.token = null;
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    localStorage.removeItem('user_id');
    localStorage.removeItem('barbearia_id');
  }

}
