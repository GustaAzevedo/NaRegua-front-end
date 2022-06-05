import { User } from './../../../models/User';
import { Router, ActivatedRoute } from '@angular/router';
import { BarbeariaService } from './../../../services/barbearia.service';
import { Barbearia } from './../../../models/Barbearia';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-barbearia',
  templateUrl: './criar-barbearia.component.html',
  styleUrls: ['./criar-barbearia.component.scss']
})
export class CriarBarbeariaComponent implements OnInit {
  img: string = 'https://via.placeholder.com/500x1400';
  barbearias: Barbearia[];
  fisicaOuJuridica: String[] = ['J', 'F'];
  tipoPessoa: String;

  enviadoUser: User;

  barbearia: Barbearia = {
    ds_nome: '',
    ds_razao: '',
    ds_telefone: '',
    ds_numero: '',
    hx_logo: '',
    tg_inativo: false,
    ds_bairro: '',
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
    ds_bairro: '',
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
  constructor(private barbeariaService: BarbeariaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.enviadoUser = params;
      console.log("ID:  -- " + this.enviadoUser.id + " Email: " + this.enviadoUser.email)
    })
  }

  mudaTipoPessoa(s): any {
    this.tipoPessoa = s;
    this.barbearia2.user_id = this.enviadoUser.id;
  }

  salvar(): void {
    this.barbearia2 = this.barbearia;
    this.barbearia2.tg_pessoa = this.tipoPessoa
    console.log(this.barbearia2)
    this.barbearia2.user_id = this.enviadoUser.id;
    this.barbeariaService.criar(this.barbearia2).subscribe(() => {
      this.barbeariaService.showMessage('Barbearia Criada')
      this.router.navigate(['/'])
    })
  }
}
