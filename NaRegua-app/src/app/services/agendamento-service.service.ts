import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Agendamento } from './../models/Agendamento';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';

var tk: String = '19|GFAtxh0ZXo1CEc7z4XFMbcZkU0R6QOrgmJB7aJ1V';
var headers_object = new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': "Bearer " + tk
});

const httpOptions = {
  headers: headers_object
};

const apiUrlInfoGES = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  ticket = '';
  barbearia_id = localStorage.getItem('barbearia_id');

  constructor(private snackkBar: MatSnackBar, private HTTP: HttpClient, public datepipe: DatePipe) { }

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

  listar(): Observable<Agendamento[]> {

    let url = `${apiUrlInfoGES}barbearia/${this.barbearia_id}/agendamentos`
    console.log("Url: " + url)
    return this.HTTP.get<Agendamento[]>(url).pipe(
      map((obj) => obj)
    )
  }

  listarFiltro(d: any): Observable<Agendamento[]> {
    return this.HTTP.get<Agendamento[]>(apiUrlInfoGES + 'barbearia/' + this.barbearia_id + '/agendamentos?data=' + d).pipe(
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

  create(agendamento: Agendamento): Observable<Agendamento> {
    console.log(httpOptions)
    var datePipe = new DatePipe("pt-BR");
    let ag = {
      hr_inicio: agendamento.hr_inicio,
      hr_fim: agendamento.hr_fim,
      dt_agendamento: datePipe.transform(agendamento.dt_agendamento, 'yyyy-MM-dd'),
      tg_cancelado: agendamento.tg_cancelado,
      tg_confirmado: agendamento.tg_confirmado,
      tg_finalizado: agendamento.tg_finalizado,
      ds_cliente: agendamento.ds_cliente,
      ds_obs: agendamento.ds_obs,
      barbearia_id: agendamento.barbearia_id
    }

    console.log("aaaaaaaaaaaa: " + ag.dt_agendamento)

    return this.HTTP.post<Agendamento>(apiUrlInfoGES + 'agendamentos', ag, httpOptions).pipe(
      catchError((e) => this.errorHandler(e)),
      map((obj) => obj),
    );
  }

  update(agendamento: Agendamento): Observable<Agendamento> {
    var datePipe = new DatePipe("pt-BR");
    let ag = {
      hr_inicio: agendamento.hr_inicio,
      hr_fim: agendamento.hr_fim,
      dt_agendamento: datePipe.transform(agendamento.dt_agendamento, 'yyyy-MM-dd'),
      tg_cancelado: agendamento.tg_cancelado,
      tg_confirmado: agendamento.tg_confirmado,
      tg_finalizado: agendamento.tg_finalizado,
      ds_cliente: agendamento.ds_cliente,
      ds_obs: agendamento.ds_obs,
      barbearia_id: agendamento.barbearia_id
    }

    console.log("aaaaaaaaaaaa: " + ag.dt_agendamento)
    let url = `${apiUrlInfoGES}agendamentos/${agendamento.id}`;
    return this.HTTP.put<Agendamento>(url, ag, httpOptions).pipe(
      catchError((e) => this.errorHandler(e)),
      map((obj) => obj),
    );

  }

}
