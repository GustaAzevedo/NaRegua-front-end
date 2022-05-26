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
  currentuser = localStorage.getItem('currentUser');

  horarios: Horario[];
  horarios2: Horario[];
  criarAlterar: boolean = false;
  constructor(private horarioService: HorarioService, private router: Router) { }

  ngOnInit(): void {
    this.listar()
    console.log("sort: " + this.horarios)

    console.log('CurrentUser:' + this.currentuser)
  }

  ordena() {
    this.horarios.sort(function (a, b) {
      return Number(a.hr_inicio) - Number(b.hr_inicio);
    });
  }

  listar() {
    this.horarioService.listar().subscribe(horario => {
      this.horarios = horario;
      console.log("Agendamento: " + this.horarios[0].hr_inicio)
    })
  }

  adicionar(): void {
    this.router.navigate(['/logado/cria-agenda'])
  }

  editar(h: Horario) {
    this.router.navigate(['/logado/cria-agenda', h])
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
