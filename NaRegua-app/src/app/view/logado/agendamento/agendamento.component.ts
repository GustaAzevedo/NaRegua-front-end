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
  agendamento: Agendamento[] = []
  agendamento2: any[] = []
  Horarios: Horario[] = []

  mappp: Agendamento[];
  dt: any;
  data: Date = new Date();
  diaSemana: String;
  data2: Date;
  constructor(private agendamentoService: AgendamentoService, private horario: HorarioService, private router: Router) { }

  ngOnInit(): void {
    this.retornaDia();
    this.agendamentoService.listar().subscribe(agendamentos => {
      this.agendamento = agendamentos;
    })

  }



  retornaDia(): void {
    //console.log('Entrou' + this.data.toString())
    console.log('Entrou: ' + this.dt)

    var datePipe = new DatePipe("en-US");
    if (this.dt == null) {
      this.dt = datePipe.transform(this.data, 'yyyy-MM-dd');

    } else {
      this.dt = datePipe.transform(this.dt, 'yyyy-MM-dd');
    }
    this.data = new Date(this.dt)

    console.log("Data formatada" + this.dt + ", Data: " + this.data)
    switch (this.data.getDay()) {
      case 1:
        this.diaSemana = 'Segunda';
        break;
      case 2:
        this.diaSemana = 'Terça';
        break;
      case 3:
        this.diaSemana = 'Quarta';
        break;
      case 4:
        this.diaSemana = 'Quinta';
        break;
      case 5:
        this.diaSemana = 'Sexta';
        break;
      case 6:
        this.diaSemana = 'Sábado';
        break;
      case 7:
        this.diaSemana = 'Domingo';
        break;
    }
  }

  preenche(): void {
    this.router.navigate(['/logado/cria-agendamento'])
  }

}
