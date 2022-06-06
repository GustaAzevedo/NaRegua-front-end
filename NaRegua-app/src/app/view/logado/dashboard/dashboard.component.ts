import { Horario } from './../../../models/Horario';
import { HorarioService } from './../../../services/horario.service';
import { AgendamentoService } from './../../../services/agendamento-service.service';
import { formatDate } from '@angular/common';
import { Agendamento } from './../../../models/Agendamento';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private agendamentoService: AgendamentoService, private horarioService: HorarioService, private router: Router) { }
  agePendentes: Agendamento[];
  ageDiario: Agendamento[];
  ageMensal: Agendamento[];
  horarios: Horario[];
  barbearia_id = localStorage.getItem('barbearia_id');


  qtdPendentes: Number;
  qtdDiarios: Number;
  qtdMes: Number;
  qtdHorarios: Number;

  data: Date = new Date();
  dia = this.data.getDate().toString();
  mes = (this.data.getMonth() + 1).toString();
  ano = this.data.getFullYear().toString();
  dataString: String;


  trataDia(): void{

    if(parseInt(this.dia) < 10){
      this.dia = '0' + this.dia;
    }

    if(parseInt(this.mes) < 10){
      this.mes = '0' + this.mes;
    }

    this.dataString = this.ano + '-' + this.mes + '-' + this.dia;

  }

  qtd_horarios(): void{

    let tgFiltroSemana = ''
    switch (this.data.getDay()) {
      case 0:
        tgFiltroSemana = 'segunda=1'
        break;
      case 1:
        tgFiltroSemana = 'terca=1'
        break;
      case 2:
        tgFiltroSemana = 'quarta=1'
        break;
      case 3:
        tgFiltroSemana = 'quinta=1'
        break;
      case 4:
        tgFiltroSemana = 'sexta=1'
        break;
      case 5:
        tgFiltroSemana = 'sabado=1'
        break;
      case 6:
        tgFiltroSemana = 'domingo=1'
        break;
    }

    this.horarioService.listarFiltro(this.barbearia_id, tgFiltroSemana).subscribe(horarios => {
      this.horarios = horarios;
      this.qtdHorarios = this.horarios.length - this.ageDiario.length;
    }
    );

  }


  ngOnInit(): void {

    this.trataDia();

    this.agendamentoService.listarPendetes(this.barbearia_id).subscribe(agendamento => {
      this.agePendentes = agendamento;
      this.qtdPendentes = this.agePendentes.length;
    }
    );

    this.agendamentoService.listarDiarios(this.barbearia_id, this.dataString).subscribe(agendamento => {
      this.ageDiario = agendamento;
      this.qtdDiarios = this.ageDiario.length;
      this.qtd_horarios();
    }
    );

    this.agendamentoService.listaMensal(this.barbearia_id).subscribe(agendamento => {
      this.ageMensal = agendamento;
      this.qtdMes = this.ageMensal.length;
    }
    );

   }


}

