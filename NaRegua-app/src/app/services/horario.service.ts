import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Horario } from './../models/Horario';
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
export class HorarioService {

  barbearia_id = localStorage.getItem('barbearia_id');

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

  listar(): Observable<Horario[]> {

    return this.HTTP.get<Horario[]>(apiUrlInfoGES + 'barbearia/' + this.barbearia_id + '/horarios').pipe(
      catchError((e) => this.errorHandler(e)),
      map((obj) => obj)
    )
  }

  create(horario: Horario): Observable<Horario> {
    console.log(httpOptions)
    return this.HTTP.post<Horario>(apiUrlInfoGES + 'horario', horario, httpOptions).pipe(

      map((obj) => obj),
    );
  }

  update(horario: Horario): Observable<Horario> {
    let url = `${apiUrlInfoGES}horario/${horario.id}`;
    return this.HTTP.put<Horario>(url, horario, httpOptions).pipe(
      catchError((e) => this.errorHandler(e)),
      map((obj) => obj),
    );
  }

  deleteHorario(h: Horario): Observable<any> {
    let url = `${apiUrlInfoGES}horario/${h.id}`;
    console.log(url)
    return this.HTTP.delete<any>(url, httpOptions).pipe(
      catchError((e) => this.errorHandler(e)),
      map((obj) => obj),
    );
  }
}
