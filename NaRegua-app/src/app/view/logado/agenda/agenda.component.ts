import { Router } from '@angular/router';
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
  criarAlterar: boolean = false;
  constructor(private horarioService: HorarioService, private router: Router) { }

  ngOnInit(): void {
    this.horarioService.listar().subscribe(horario => {
      this.horarios = horario;
      console.log("Agendamento: " + this.horarios[0].hr_inicio)
    })
  }

  adicionar(): void {
    if (this.criarAlterar) {

    } else {
      this.router.navigate(['/logado/cria-agenda'])
    }
  }

  editar(h: Horario) {
    this.router.navigateByUrl('/logado/cria-agenda', {
      state: { h: Horario }
    })
  }

  excluir(h: Horario) {
    this.horarioService.deleteHorario(h).subscribe(() => {
      this.horarioService.showMessage('Agenda Excluída');
      setTimeout(() => {
        this.ngOnInit()
      }, 1000)
    });

  }

}
