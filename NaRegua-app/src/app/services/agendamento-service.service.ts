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
  barbearia_id = localStorage.getItem('barbearia_id');

  constructor(private HTTP: HttpClient) { }

  listar(): Observable<Agendamento[]> {

    let url = `${apiUrlInfoGES}barbearia/${this.barbearia_id}/agendamentos`
    console.log("Url: " + url)
    return this.HTTP.get<Agendamento[]>(url).pipe(
      map((obj) => obj)
    )
  }

  listarPendetes(): Observable<Agendamento[]> {
    return this.HTTP.get<Agendamento[]>(apiUrlInfoGES + 'barbearia/' + this.barbearia_id + '/agendamentos?confirmado=0').pipe(
      map((obj) => obj)
    )
  }

  listarDiarios(data: String): Observable<Agendamento[]> {
    return this.HTTP.get<Agendamento[]>(apiUrlInfoGES + 'barbearia/' + this.barbearia_id + '/agendamentos?data=' + data).pipe(
      map((obj) => obj)
    )
  }

  listaMensal(): Observable<Agendamento[]> {
    return this.HTTP.get<Agendamento[]>(apiUrlInfoGES + 'barbearia/' + this.barbearia_id + '/agendamentos?mes=1').pipe(
      map((obj) => obj)
    )
  }

  listarDaBarb(): Observable<Agendamento[]> {
    return this.HTTP.get<Agendamento[]>(apiUrlInfoGES + 'barbearia/' + this.barbearia_id + '/agendamentos').pipe(
      map((obj) => obj)
    )
  }

}
