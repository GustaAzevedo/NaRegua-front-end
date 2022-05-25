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
  ageProx: Agendamento[];

  qtdPendentes: Number;
  qtdDiarios: Number;

  data: Date = new Date();
  dia = this.data.getDay().toString();
  mes = this.data.getMonth().toString();
  ano = this.data.getFullYear().toString();





  dataString = this.ano + '-' + this.mes + '-' + this.dia;

  trataDia(): void{

    if(this.dia)
  }


  ngOnInit(): void {

    this.agendamentoService.listarPendetes().subscribe(agendamento => {
      this.agePendentes = agendamento;
      console.log("Agendamento: " + this.agePendentes[0].hr_inicio);
      this.qtdPendentes = this.agePendentes.length;
    }
    )

    this.agendamentoService.listarDiarios(this.dataString).subscribe(agendamento => {
      this.ageDiario = agendamento;
      this.qtdDiarios = this.ageDiario.length;
    }
    )

   }
  }

