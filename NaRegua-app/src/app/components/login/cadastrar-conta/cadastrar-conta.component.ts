import { UserService } from './../../../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import { User } from './../../../models/User';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-conta',
  templateUrl: './cadastrar-conta.component.html',
  styleUrls: ['./cadastrar-conta.component.scss']
})
export class CadastrarContaComponent implements OnInit {
  password: String;
  password2: String;
  user: any = {
    email: '',
    password: '',
    name: '',
  }

  userRetorno: User;

  constructor(private userService: UserService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {

  }

  criarCt(): void {
    let a = this.user.email;
    this.user = {
      email: this.user.email,
      password: this.password,
      name: a.substring(0, 5),
    }

    if (this.password != this.password2 && this.password != '') {
      alert('Digite a mesma senha')
      setTimeout(() => {
        this.ngOnInit();
      }, 500)
    }
    else if (this.user.email != null && this.user.email != '' && this.password != '' && this.password.length > 7) {
      let a = this.userService.create(this.user).subscribe(ret => {
        this.userRetorno = ret;
        this.userService.showMessage('Conta criado!');
        this.router.navigate(['/criar-barbearia', this.userRetorno])
      })
      console.log("OBJ RETORNO " + a)
    }
    else {
      alert('Insira seus email e senha')
    }

  }

}
