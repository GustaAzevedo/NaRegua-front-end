import { User } from './../models/User';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';

const apiUrlInfoGES = environment.apiUrl;

var tk: String = '19|GFAtxh0ZXo1CEc7z4XFMbcZkU0R6QOrgmJB7aJ1V';
var headers_object = new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': "Bearer " + tk
});

const httpOptions = {
  headers: headers_object
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private snackkBar: MatSnackBar, private HTTP: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackkBar.open(msg, 'X', {
      duration: 5000,
      horizontalPosition: "center",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um Erro!', true)
    return EMPTY
  }

  create(user: User): Observable<User> {
    console.log(httpOptions)
    return this.HTTP.post<User>(apiUrlInfoGES + 'user', user).pipe(
      map((obj) => obj),
    );
  }

}
