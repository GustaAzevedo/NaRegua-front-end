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
    return this.HTTP.get<Agendamento[]>(apiUrlInfoGES + 'agendamentos').pipe(
      map((obj) => obj)
    )
  }

}
