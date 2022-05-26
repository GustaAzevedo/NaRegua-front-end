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

  update(barbearia: Barbearia): Observable<Barbearia> {
    let url = `${apiUrlInfoGES}barbearia/${barbearia.id}`;
    return this.HTTP.put<Barbearia>(url, barbearia, httpOptions).pipe(
      catchError((e) => this.errorHandler(e)),
      map((obj) => obj),
    );
  }
}
