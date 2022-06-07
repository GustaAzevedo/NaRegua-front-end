import { environment } from './../../environments/environment';
import { Barbearia } from './../models/Barbearia';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';


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
export class BarbeariaService {

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

  pegar(id: Number): Observable<Barbearia[]> {
    let url = `${apiUrlInfoGES}barbearia/${id}`;
    console.log(url)

    return this.HTTP.get<Barbearia[]>(url).pipe(
      catchError((e) => this.errorHandler(e)),
      map((obj) => obj)
    )
  }

  criar(barbearia: Barbearia): Observable<Barbearia> {
    let url = `${apiUrlInfoGES}barbearia`;

    let a = {
      ds_razao: barbearia.ds_razao,
      ds_nome: barbearia.ds_nome,
      ds_endereco: barbearia.ds_endereco,
      ds_numero: barbearia.ds_numero,
      ds_cidade: barbearia.ds_cidade,
      ds_bairro: barbearia.ds_bairro,
      ds_cep: barbearia.ds_cep,
      ds_uf: barbearia.ds_uf,
      ds_completo: barbearia.ds_completo,
      tg_pessoa: barbearia.tg_pessoa,
      ds_cpfcnpj: barbearia.ds_cpfcnpj,
      ds_email: barbearia.ds_email,
      ds_celular: barbearia.ds_celular,
      ds_telefone: barbearia.ds_telefone,
      user_id: barbearia.user_id,
      hx_logo: barbearia.hx_logo
    }

    console.log("Nome: " + barbearia.ds_razao + " nome2: " +
      barbearia.ds_nome + " Endereco: " + barbearia.ds_endereco +
      " numero: " + barbearia.ds_numero +
      " - cidade: " + barbearia.ds_cidade + " bairro: " + barbearia.ds_bairro +
      " cep: " + barbearia.ds_cep + " ds: " + barbearia.ds_uf + " completo: " +
      barbearia.ds_completo + " tg_pessoa:" + barbearia.tg_pessoa + " cpf/cnpj: " +
      barbearia.ds_cpfcnpj + " email:" + barbearia.ds_email + " celular:" +
      barbearia.ds_celular + " telefone:" + barbearia.ds_telefone +
      " - id " + barbearia.user_id + " logo: " + barbearia.hx_logo
    )
    return this.HTTP.post<Barbearia>(url, a, httpOptions).pipe(
      catchError((e) => this.errorHandler(e)),
      map((obj) => obj),
    );
  }

  update(barbearia: Barbearia): Observable<Barbearia> {
    let url = `${apiUrlInfoGES}barbearia/${barbearia.id}`;
    return this.HTTP.put<Barbearia>(url, barbearia, httpOptions).pipe(
      catchError((e) => this.errorHandler(e)),
      map((obj) => obj),
    );
  }
}
