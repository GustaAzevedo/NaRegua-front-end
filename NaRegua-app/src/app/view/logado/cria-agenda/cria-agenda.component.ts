import { Barbearia } from './../../../models/Barbearia';
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
  horaInicio: string
  horaFim: string
  tg_domingo: Number
  tg_segunda: Number
  tg_terca: Number
  tg_quarta: Number
  tg_quinta: Number
  tg_sexta: Number
  tg_sabado: Number
  barbearia_id = localStorage.getItem('barbearia_id');

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
    updated_at: null,
    created_at: null,
    barbearia_id: parseInt(this.barbearia_id)
  };
  horario2: Horario;

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

    if (this.alteraOuCria) {
      this.horaInicio = this.horario2.hr_inicio.toString();
      this.horaFim = this.horario2.hr_fim.toString();
      this.tg_domingo = this.horario2.tg_domingo
      this.tg_segunda = this.horario2.tg_segunda
      this.tg_terca = this.horario2.tg_terca
      this.tg_quarta = this.horario2.tg_quarta
      this.tg_quinta = this.horario2.tg_quinta
      this.tg_sexta = this.horario2.tg_sexta
      this.tg_sabado = this.horario2.tg_sabado
      this.barbearia_id

    }



  }

  cria(): void {
    if (this.alteraOuCria == false) { //--Aqui cria
      this.horario.updated_at = Date.now().toString();
      this.horario.created_at = Date.now().toString();
      this.horarioService.create(this.horario).subscribe(() => {
        this.horarioService.showMessage('Agenda criado');
        this.router.navigate(['/logado/agenda'])
      })
    }
    else { //--Aqui Altera

      let hr: Horario = {
        tg_domingo: this.tg_domingo,
        tg_segunda: this.tg_segunda,
        tg_terca: this.tg_terca,
        tg_quarta: this.tg_quarta,
        tg_quinta: this.tg_quinta,
        tg_sexta: this.tg_sexta,
        tg_sabado: this.tg_sabado,
        created_at: this.horario2.created_at,
        updated_at: Date.now().toString(),
        hr_fim: this.horaFim,
        hr_inicio: this.horaInicio,
        tg_inativo: this.horario2.tg_inativo,
        barbearia_id: this.horario2.barbearia_id,
        id: this.horario2.id

      }
      console.log('Horarios: ' + hr.hr_inicio, hr.tg_domingo, hr.tg_segunda)

      this.horarioService.update(hr).subscribe(() => {
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
      this.tg_domingo = 1
    }
    else {
      this.horario.tg_domingo = 0
      this.tg_domingo = 0
    }
    return n
  }

  alteraSeg(n: Number): Number {
    if (n == 0) {
      this.horario.tg_segunda = 1
      this.tg_segunda = 1
    }
    else {
      this.horario.tg_segunda = 0
      this.tg_segunda = 0
    }
    return n
  }

  alteraTer(n: Number): Number {
    if (n == 0) {
      this.horario.tg_terca = 1
      this.tg_terca = 1
    }
    else {
      this.horario.tg_terca = 0
      this.tg_terca = 0
    }
    return n
  }

  alteraQua(n: Number): Number {
    if (n == 0) {
      this.horario.tg_quarta = 1
      this.tg_quarta = 1
    }
    else {
      this.horario.tg_quarta = 0
      this.tg_quarta = 0
    }
    return n
  }

  alteraQui(n: Number): Number {
    if (n == 0) {
      this.horario.tg_quinta = 1
      this.tg_quinta = 1
    }
    else {
      this.horario.tg_quinta = 0
      this.tg_quinta = 0
    }
    return n
  }

  alteraSex(n: Number): Number {
    if (n == 0) {
      this.horario.tg_sexta = 1
      this.tg_sexta = 1
    }
    else {
      this.horario.tg_sexta = 0
      this.tg_sexta = 0
    }
    return n
  }

  alteraSab(n: Number): Number {
    if (n == 0) {
      this.horario.tg_sabado = 1
      this.tg_sabado = 1
    }
    else {
      this.horario.tg_sabado = 0
      this.tg_sabado = 0
    }
    return n
  }
  voltar(): void {
    this.router.navigate(['/logado/agenda'])
  }

}
