import { User } from './../../../models/User';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-conta',
  templateUrl: './cadastrar-conta.component.html',
  styleUrls: ['./cadastrar-conta.component.scss']
})
export class CadastrarContaComponent implements OnInit {
  password: String;
  user: any = {
    email: '',
    password: '',
    name: '',
  }

  constructor() { }

  ngOnInit(): void {

  }

  criarCt(): void {
    console.log(this.user.email + ' - ' + this.user.name + ' - ')
  }

}
