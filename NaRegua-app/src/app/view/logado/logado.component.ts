import { Barbearia } from './../../models/Barbearia';
import { BarbeariaService } from './../../services/barbearia.service';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logado',
  templateUrl: './logado.component.html',
  styleUrls: ['./logado.component.scss']
})
export class LogadoComponent implements OnInit {
  barbeariaId: any = 1;
  barbearias: Barbearia[];
  barbearia: Barbearia = {
    ds_nome: '',
    ds_razao: '',
    ds_telefone: '',
    ds_numero: '',
    hx_logo: '',
    tg_inativo: false,
    ds_bairro: 'null',
    ds_celular: '',
    ds_cep: '',
    ds_cidade: '',
    ds_completo: '',
    ds_cpfcnpj: '',
    ds_email: '',
    ds_endereco: '',
    ds_uf: '',
    user_id: 0,
    created_at: null,
    updated_at: null,
    tg_pessoa: '',
  }
  constructor(private authService: AuthService, private router: Router, private barbeariaService: BarbeariaService) { }


  ngOnInit(): void {
    let tk = {
      token: localStorage.getItem('token'),
      user_id: localStorage.getItem('user_id'),
      barbearia_id: localStorage.getItem('barbearia_id')
    }
    this.barbeariaId = tk.barbearia_id

    if (tk.token == null || tk.token == '') {
      this.router.navigate(['../login'])
    }
    this.pegaBarbearia();
  }

  pegaBarbearia(): void {
    this.barbeariaService.pegar(this.barbeariaId).subscribe(barbe => {
      this.barbearias = barbe;
      console.log("barbearia: " + this.barbearias[0].ds_nome)
      this.barbearia = this.barbearias[0]
    })
  }

  sair(): void {
    this.authService.logout();
    this.router.navigate(['../login'])
  }

}
