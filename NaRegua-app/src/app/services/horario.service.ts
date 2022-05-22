import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Horario } from './../models/Horario';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
//import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';

const apiUrlInfoGES = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class HorarioService {

  constructor(private HTTP: HttpClient/*, private snackkBar: MatSnackBar*/) { }
  /*
  showMessage(msg: string, isError: boolean = false): void {
    this.snackkBar.open(msg, 'X', {
      duration: 5000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um Erro!', true)
    return EMPTY
  }
  */

  listar(): Observable<Horario[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': '7|4KwHUCWMol9Bns8q9NzoJvgF0vRj6ZPGJ2OJciHz'
      })
    };

    return this.HTTP.get<Horario[]>(apiUrlInfoGES + 'horario', httpOptions).pipe(
      map((obj) => obj)
    )
  }

  create(horario: Horario): Observable<Horario> {

    return this.HTTP.post<Horario>(apiUrlInfoGES + 'horario', horario).pipe(
      //catchError((e) => this.errorHandler(e)),
      map((obj) => obj),
    );
  }
}
