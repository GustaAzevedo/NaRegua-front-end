import { AgendamentoService } from './../../../../services/agendamento-service.service';
import { Agendamento } from './../../../../models/Agendamento';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cria-agendamento',
  templateUrl: './cria-agendamento.component.html',
  styleUrls: ['./cria-agendamento.component.scss']
})


export class CriaAgendamentoComponent implements OnInit {
  barbearia_id: any;
  data: Date;
  diaSemana: String;
  hrInicio: String;
  hrFim: String;
  cliente: String;
  obs: String;

  tgFiltroSemana: String;
  dt: any;


  agendamento: Agendamento;
  agendamento2: Agendamento;
  salvarCriar: boolean = false;
  alteraOuCria: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public datepipe: DatePipe,
    private agendamentoService: AgendamentoService) { }

  ngOnInit(): void {
    this.barbearia_id = localStorage.getItem('barbearia_id');

    this.route.params.subscribe(params => {
      this.agendamento2 = params;
      if (this.agendamento2.id != null) {
        this.alteraOuCria = true;
      }
      this.hrInicio = this.agendamento2.hr_inicio;
      this.hrFim = this.agendamento2.hr_fim;
      this.data = this.agendamento2.dt_agendamento;
      this.cliente = this.agendamento2.ds_cliente;
      this.obs = this.agendamento2.ds_obs;
      console.log("Data: " + this.data + " cliente: " + this.cliente)
      this.retornaDia();
    })


  }

  retornaDia(): void {
    //console.log('Entrou' + this.data.toString())

    var datePipe = new DatePipe("pt-BR");
    if (this.dt == null) {
      this.dt = datePipe.transform(this.data, 'yyyy-MM-dd');
    } else {
      this.dt = datePipe.transform(this.dt, 'yyyy-MM-dd');
    }

    //console.log("data:" + this.dt)
    this.data = new Date(this.dt)

    switch (this.data.getDay()) {
      case 0:
        this.diaSemana = 'Segunda';
        this.tgFiltroSemana = 'segunda=1'
        break;
      case 1:
        this.diaSemana = 'Terça';
        this.tgFiltroSemana = 'terca=1'
        break;
      case 2:
        this.diaSemana = 'Quarta';
        this.tgFiltroSemana = 'quarta=1'
        break;
      case 3:
        this.diaSemana = 'Quinta';
        this.tgFiltroSemana = 'quinta=1'
        break;
      case 4:
        this.diaSemana = 'Sexta';
        this.tgFiltroSemana = 'sexta=1'
        break;
      case 5:
        this.diaSemana = 'Sábado';
        this.tgFiltroSemana = 'sabado=1'
        break;
      case 6:
        this.diaSemana = 'Domingo';
        this.tgFiltroSemana = 'domingo=1'
        break;
    }
  }

  cria(): void {
    if (this.alteraOuCria == false) {
      //--Aqui cria

      let agend: Agendamento = {
        barbearia_id: this.barbearia_id,
        created_at: Date.now().toString(),
        ds_cliente: this.cliente,
        ds_obs: this.obs,
        hr_fim: this.hrFim,
        hr_inicio: this.hrInicio,
        tg_cancelado: 0,
        tg_confirmado: 1,
        tg_finalizado: 0,
        updated_at: Date.now().toString(),
        dt_agendamento: this.dt,
        id: null

      }

      console.log("OBS: " + this.dt)

      this.agendamentoService.create(agend).subscribe(() => {
        this.agendamentoService.showMessage('Agendamento criado');
        this.router.navigate(['/logado/agendamento'])
      })
    }
    else {
      //--Aqui Altera
      let agend: Agendamento = {
        barbearia_id: this.agendamento2.barbearia_id,
        created_at: this.agendamento2.created_at,
        ds_cliente: this.cliente,
        ds_obs: this.obs,
        hr_fim: this.agendamento2.hr_fim,
        hr_inicio: this.agendamento2.hr_inicio,
        tg_cancelado: this.agendamento2.tg_cancelado,
        tg_confirmado: this.agendamento2.tg_confirmado,
        tg_finalizado: this.agendamento2.tg_finalizado,
        updated_at: this.agendamento2.updated_at,
        dt_agendamento: this.agendamento2.dt_agendamento,
        id: this.agendamento2.id

      }
      console.log("OBS: " + agend.ds_obs)

      this.agendamentoService.update(agend).subscribe(() => {
        this.agendamentoService.showMessage('Agendamento salvo');
        this.router.navigate(['/logado/agendamento'])
      })


    }
  }


}
