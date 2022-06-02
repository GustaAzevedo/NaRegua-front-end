import { async } from '@angular/core/testing';
import { Horario } from './../../../models/Horario';
import { HorarioService } from './../../../services/horario.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { Agendamento } from './../../../models/Agendamento';
import { AgendamentoService } from './../../../services/agendamento-service.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.scss']
})
export class AgendamentoComponent implements OnInit {
  agendamento: Agendamento[] = [] //agendamento populado
  agendamento2: Agendamento[] = [] //Agendamento não populado
  horarios: Horario[] = [] //foreach
  horarios2: Horario[] = []
  tgFiltroSemana: String;
  barbearia_id = localStorage.getItem('barbearia_id');

  dt: any;
  data: Date = new Date();
  diaSemana: String;
  data2: Date;
  constructor(private agendamentoService: AgendamentoService, private horarioService: HorarioService, private router: Router) { }

  ngOnInit(): void {
    this.retornaDia();
    this.agendamentoFiltro();

  }

  agendamentoFiltro() {
    this.agendamentoService.listarFiltro(this.barbearia_id, this.dt).subscribe(agendamentos => {
      //Sempre limpar para trazer só o dia filtrado
      this.agendamento2 = [];
      this.agendamento = agendamentos;
      let i = 1;
      if (i === 1) {
        this.horariosFunc();
        i = i + 1
      }
    });


  }

  horariosFunc() {
    this.horarioService.listarFiltro(this.barbearia_id, this.tgFiltroSemana).subscribe(horarios => {
      this.horarios = horarios;

      console.log("Horario: " + this.horarios.length)
      for (let i = 0; this.horarios.length > i; i++) {



        let retorno: any = this.agendamento.filter(p => p.hr_inicio == this.horarios[i].hr_inicio)


        if (retorno == null || retorno == '') {
          let ag = {
            hr_fim: this.horarios[i].hr_fim,
            hr_inicio: this.horarios[i].hr_inicio,
            dt_agendamento: this.data,
          }
          this.agendamento2.push(ag)
        }
        else {
          let ag = {
            hr_fim: retorno[0].hr_fim,
            hr_inicio: retorno[0].hr_inicio,
            dt_agendamento: this.data,
            barbearia_id: retorno[0].barbearia_id,
            created_at: retorno[0].created_at,
            ds_cliente: retorno[0].ds_cliente,
            ds_obs: retorno[0].ds_obs,
            tg_cancelado: retorno[0].tg_cancelado,
            updated_at: retorno[0].updated_at,
            tg_finalizado: retorno[0].tg_finalizado,
            tg_confirmado: retorno[0].tg_confirmado,
            id: retorno[0].id
          }
          this.agendamento2.push(ag)
        }
      }
    })
  }

  retornaDia(): void {
    //console.log('Entrou' + this.data.toString())
    console.log("DATA1: " + this.data)


    var datePipe = new DatePipe("pt-BR");

    if (this.dt == null) {
      this.dt = datePipe.transform(this.data, 'yyyy-MM-dd');
    } else {
      this.dt = datePipe.transform(this.dt, 'yyyy-MM-dd');
    }

    console.log("DATA2: " + this.data)
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

  preenche(ag?: Agendamento): void {

    this.router.navigate(['/logado/cria-agendamento', ag])

  }

}
