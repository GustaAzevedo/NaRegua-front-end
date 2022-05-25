import { BarbeariaService } from './../../../services/barbearia.service';
import { Barbearia } from './../../../models/Barbearia';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  id: Number = 1;
  img: string = 'https://via.placeholder.com/500x1400';

  barbearia: Barbearia = {
    ds_nome: '',
    ds_razao: '',
    ds_telefone: '',
    ds_numero: '',
    hx_logo: '',
    tg_inativo: false,
    ds_bairro: 'null',
    ds_celular: '',
    ds_cep: ' ',
    ds_cidade: '',
    ds_completo: '',
    ds_cpfcnpj: '',
    ds_email: '',
    ds_endereco: '',
    ds_uf: '',
    user_id: 0,
    created_at: null,
    updated_at: null,
    id: 0

  }
  constructor(private barbeariaService: BarbeariaService) { }

  ngOnInit(): void {
    this.pegaBarbearia();
  }

  pegaBarbearia(): void {
    this.barbeariaService.pegar(this.id).subscribe(b => {
      this.barbearia = b;
      console.log("barbearia: " + this.barbearia)
    })
  }



}
