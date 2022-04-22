import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './view/login/login.component';
import { LoginModalComponent } from './components/login/login-modal/login-modal.component';
import { LogadoComponent } from './view/logado/logado.component';
import { CadastrarContaComponent } from './components/login/cadastrar-conta/cadastrar-conta.component';


const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
    children: [
      {
        path: "login",
        component: LoginModalComponent
      },
      {
        path: "criar-conta",
        component: CadastrarContaComponent
      }

    ]
  },
  {
    path: "logado",
    component: LogadoComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
