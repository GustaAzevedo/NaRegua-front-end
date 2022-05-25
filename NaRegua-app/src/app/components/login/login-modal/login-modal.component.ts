import { AuthService } from './../../../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {
  form: FormGroup;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(private authService: AuthService, private router: Router, private snackBar: MatSnackBar) { }

  img = 'asse'
  email: string = '';
  senha: string = '';
  device: string = 'cel1';
  ngOnInit(): void {

  }

  logar() {
    const usuario = {
      'email': this.email,
      'password': this.senha,
      'device': this.device
    }
    console.log(
      this.authService.login(usuario).subscribe(data => {

        this.mensagem('Logado', 'sucesso')

        this.router.navigate(['/logado'])

      }, error => {
        this.mensagem('Digite o login correto', 'sucesso')
      })
    )
  }

  mensagem(mensagem, type: 'sucesso' | 'error') {
    this.snackBar.open(mensagem, '', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: type,
      duration: 10 * 1000,
    });
  }

}
