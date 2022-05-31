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

  listar(id: String): Observable<Agendamento[]> {

    let url = `${apiUrlInfoGES}barbearia/${id}/agendamentos`
    console.log("Url: " + url)
    return this.HTTP.get<Agendamento[]>(url).pipe(
      map((obj) => obj)
    )
  }

  listarFiltro(id: String, d: any): Observable<Agendamento[]> {
    return this.HTTP.get<Agendamento[]>(apiUrlInfoGES + 'barbearia/' + id + '/agendamentos?data=' + d).pipe(
      map((obj) => obj)
    )
  }

  listarPendetes(id: String): Observable<Agendamento[]> {
    return this.HTTP.get<Agendamento[]>(apiUrlInfoGES + 'barbearia/' + id + '/agendamentos?confirmado=0').pipe(
      map((obj) => obj)
    )
  }

  listarDiarios(id: String, data: String): Observable<Agendamento[]> {
    return this.HTTP.get<Agendamento[]>(apiUrlInfoGES + 'barbearia/' + id + '/agendamentos?data=' + data).pipe(
      map((obj) => obj)
    )
  }

  listaMensal(id: String): Observable<Agendamento[]> {
    return this.HTTP.get<Agendamento[]>(apiUrlInfoGES + 'barbearia/' + id + '/agendamentos?mes=1').pipe(
      map((obj) => obj)
    )
  }

  listarDaBarb(id: String): Observable<Agendamento[]> {
    return this.HTTP.get<Agendamento[]>(apiUrlInfoGES + 'barbearia/' + id + '/agendamentos').pipe(
      map((obj) => obj)
    )
  }

}
