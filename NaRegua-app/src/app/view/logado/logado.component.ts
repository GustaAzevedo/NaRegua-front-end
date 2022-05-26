import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logado',
  templateUrl: './logado.component.html',
  styleUrls: ['./logado.component.scss']
})
export class LogadoComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }


  ngOnInit(): void {
    let tk = {
      token: localStorage.getItem('token'),
      user_id: localStorage.getItem('user_id'),
      barbearia_id: localStorage.getItem('barbearia_id')
    }
    if (tk.token == null || tk.token == '') {
      this.router.navigate(['../login'])
    }
    console.log(tk)
  }
  sair(): void {
    this.authService.logout();
    this.router.navigate(['../login'])
  }

}
