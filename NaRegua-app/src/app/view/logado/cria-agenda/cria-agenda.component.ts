import { Horario } from './../../../models/Horario';
import { Router } from '@angular/router';
import { HorarioService } from './../../../services/horario.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-cria-agenda',
  templateUrl: './cria-agenda.component.html',
  styleUrls: ['./cria-agenda.component.scss']
})
export class CriaAgendaComponent implements OnInit {
  horarios: Horario[];
  horario: Horario = {
    hr_fim: '',
    hr_inicio: '',
    tg_domingo: 0,
    tg_segunda: 0,
    tg_terca: 0,
    tg_quarta: 0,
    tg_quinta: 0,
    tg_sexta: 0,
    tg_sabado: 0,
    tg_inativo: 0,
    barbearia_id: 1,

  };
  bacon = 'oi';
  constructor(private horarioService: HorarioService, private router: Router) { }

  ngOnInit(): void {

  }

  salvar(): void {
    this.horarioService.create(this.horario).subscribe(() => {
      this.router.navigate(['/agenda'])
    })
  }

  alteraDom(n: Number): Number {
    if (n == 0) {
      this.horario.tg_domingo = 1
    }
    else {
      this.horario.tg_domingo = 0
    }
    return n
  }

  alteraSeg(n: Number): Number {
    if (n == 0) {
      this.horario.tg_segunda = 1
    }
    else {
      this.horario.tg_segunda = 0
    }
    return n
  }

  alteraTer(n: Number): Number {
    if (n == 0) {
      this.horario.tg_terca = 1
    }
    else {
      this.horario.tg_terca = 0
    }
    return n
  }

  alteraQua(n: Number): Number {
    if (n == 0) {
      this.horario.tg_quarta = 1
    }
    else {
      this.horario.tg_quarta = 0
    }
    return n
  }

  alteraQui(n: Number): Number {
    if (n == 0) {
      this.horario.tg_quinta = 1
    }
    else {
      this.horario.tg_quinta = 0
    }
    return n
  }

  alteraSex(n: Number): Number {
    if (n == 0) {
      this.horario.tg_sexta = 1
    }
    else {
      this.horario.tg_sexta = 0
    }
    return n
  }

  alteraSab(n: Number): Number {
    if (n == 0) {
      this.horario.tg_sabado = 1
    }
    else {
      this.horario.tg_sabado = 0
    }
    return n
  }

}