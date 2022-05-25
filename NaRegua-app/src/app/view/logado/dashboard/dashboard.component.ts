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

  constructor(private agendamentoService: AgendamentoService, private router: Router) { }
  agePendentes: Agendamento[];
  ageDiario: Agendamento[];
  ageMensal: Agendamento[];


  qtdPendentes: Number;
  qtdDiarios: Number;
  qtdMes: Number;

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


  ngOnInit(): void {

    this.trataDia();

    this.agendamentoService.listarPendetes().subscribe(agendamento => {
      this.agePendentes = agendamento;
      this.qtdPendentes = this.agePendentes.length;
    }
    );

    this.agendamentoService.listarDiarios(this.dataString).subscribe(agendamento => {
      this.ageDiario = agendamento;
      this.qtdDiarios = this.ageDiario.length;
    }
    );

    this.agendamentoService.listaMensal().subscribe(agendamento => {
      this.ageMensal = agendamento;
      this.qtdMes = this.ageMensal.length;
    }
    );

   }
  }

