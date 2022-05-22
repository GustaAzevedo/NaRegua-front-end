import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Agendamento } from './../models/Agendamento';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';

const apiUrlInfoGES = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  ticket = '';
  constructor(private HTTP: HttpClient) { }

  listar(): Observable<Agendamento[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': '7|4KwHUCWMol9Bns8q9NzoJvgF0vRj6ZPGJ2OJciHz'
      })
    };

    return this.HTTP.get<Agendamento[]>(apiUrlInfoGES + 'agendamentos', httpOptions).pipe(
      map((obj) => obj)
    )
  }

}
