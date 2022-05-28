import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cria-agendamento',
  templateUrl: './cria-agendamento.component.html',
  styleUrls: ['./cria-agendamento.component.scss']
})
export class CriaAgendamentoComponent implements OnInit {
  salvarCriar: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
