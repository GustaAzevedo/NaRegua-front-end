import { Router } from '@angular/router';
import { BarbeariaService } from './../../../services/barbearia.service';
import { Barbearia } from './../../../models/Barbearia';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  barbeariaId: any = 1;
  img: string = 'https://via.placeholder.com/500x1400';
  barbearias: Barbearia[];
  fisicaOuJuridica: String[] = ['J', 'F'];
  tipoPessoa: String;

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
  barbearia2: Barbearia = {
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
  constructor(private barbeariaService: BarbeariaService, private router: Router,) { }

  ngOnInit(): void {
    this.pegaBarbearia();
  }

  pegaBarbearia(): void {
    this.barbeariaService.pegar(this.barbeariaId).subscribe(barbe => {
      this.barbearias = barbe;
      console.log("barbearia: " + this.barbearias[0].ds_nome)
      this.barbearia = this.barbearias[0]
      this.tipoPessoa = this.barbearia.tg_pessoa
    })
  }
  mudaTipoPessoa(s): any {
    this.tipoPessoa = s;
  }

  salvar(): void {
    this.barbearia2 = this.barbearia;
    this.barbearia2.tg_pessoa = this.tipoPessoa
    console.log(this.barbearia2)

    this.barbeariaService.update(this.barbearia2).subscribe(() => {
      this.barbeariaService.showMessage('Barbearia salva')
      this.router.navigate(['/logado/dashboard'])
    })
  }



}
