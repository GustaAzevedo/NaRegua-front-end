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

  listarPendetes(): Observable<Agendamento[]> {
    return this.HTTP.get<Agendamento[]>(apiUrlInfoGES + 'barbearia/1/agendamentos?confirmado=0').pipe(
      map((obj) => obj)
    )
  }

  listarDiarios(data: String): Observable<Agendamento[]> {
    return this.HTTP.get<Agendamento[]>(apiUrlInfoGES + 'barbearia/1/agendamentos?data=' + data).pipe(
      map((obj) => obj)
    )
  }

  listaMensal(): Observable<Agendamento[]> {
    return this.HTTP.get<Agendamento[]>(apiUrlInfoGES + 'barbearia/1/agendamentos?mes=1').pipe(
      map((obj) => obj)
    )
  }

  listarDaBarb(): Observable<Agendamento[]> {
    return this.HTTP.get<Agendamento[]>(apiUrlInfoGES + 'barbearia/1/agendamentos').pipe(
      map((obj) => obj)
    )
  }

}
