import { Agendamento } from './../../../models/Agendamento';
import { AgendamentoService } from './../../../services/agendamento-service.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.scss']
})
export class AgendamentoComponent implements OnInit {
  agendamento: Agendamento[];

  constructor(private agendamentoService: AgendamentoService) { }

  ngOnInit(): void {
    this.agendamentoService.listar().subscribe(agendamentos => {
      this.agendamento = agendamentos;
      console.log("Agendamento: " + this.agendamento[0].hr_inicio)
    })
  }

}
