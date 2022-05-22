import { Horario } from './../../../models/Horario';
import { HorarioService } from './../../../services/horario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {
  horarios: Horario[];

  constructor(private horarioService: HorarioService) { }

  ngOnInit(): void {
    this.horarioService.listar().subscribe(horario => {
      this.horarios = horario;
      console.log("Agendamento: " + this.horarios[0].hr_inicio)
    })
  }

}
