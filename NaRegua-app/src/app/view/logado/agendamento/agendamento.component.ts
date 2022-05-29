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
  agendamento2: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  mappp: Agendamento[];

  data: Date = new Date();
  diaSemana: String;
  data2: Date;
  constructor(private agendamentoService: AgendamentoService, private router: Router) { }

  ngOnInit(): void {
    this.retornaDia();
    this.agendamentoService.listar().subscribe(agendamentos => {
      this.agendamento = agendamentos;
      //console.log("Agendamento: " + this.agendamento[0].hr_inicio)
    })

  }

  retornaDia(): void {
    //console.log('Entrou' + this.data.toString())
    this.data = new Date(this.data)

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
