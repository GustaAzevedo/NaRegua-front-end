import { Horario } from './../../../models/Horario';
import { ActivatedRoute, Router } from '@angular/router';
import { HorarioService } from './../../../services/horario.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-cria-agenda',
  templateUrl: './cria-agenda.component.html',
  styleUrls: ['./cria-agenda.component.scss']
})
export class CriaAgendaComponent implements OnInit {
  data = new Date();
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
    updated_at: null,
    created_at: null
  };
  horario2: Horario = {
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
    updated_at: null,
    created_at: null
  };
  alteraOuCria: boolean = false;

  constructor(private horarioService: HorarioService, private router: Router, private route: ActivatedRoute, public datepipe: DatePipe) {
    const h = this.router.getCurrentNavigation();
    //this.horario = h.extras.state.Horario;
    //console.log(this.horario)
  }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.horario2 = params;
      console.log("criado: " + this.horario2.created_at)
      if (this.horario2.id != null) {
        this.alteraOuCria = true;
      }
    })

  }

  cria(): void {
    if (this.alteraOuCria == false) {
      this.horario.updated_at = Date.now().toString();
      this.horario.created_at = Date.now().toString();
      this.horarioService.create(this.horario).subscribe(() => {
        this.horarioService.showMessage('Agenda criado');
        this.router.navigate(['/logado/agenda'])
      })
    }
    else {
      this.horarioService.update(this.horario2).subscribe(() => {
        this.horarioService.showMessage('Agenda salvo');
        this.router.navigate(['/logado/agenda'])
      })
    }
  }

  edita(): void {

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
  voltar(): void {
    this.router.navigate(['/logado/agenda'])
  }

}
