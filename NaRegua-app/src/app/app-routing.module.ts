import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './view/login/login.component';
import { LoginModalComponent } from './components/login/login-modal/login-modal.component';
import { LogadoComponent } from './view/logado/logado.component';
import { CadastrarContaComponent } from './components/login/cadastrar-conta/cadastrar-conta.component';
import { DashboardComponent } from './view/logado/dashboard/dashboard.component';
import { AgendamentoComponent } from './view/logado/agendamento/agendamento.component';
import { CadastrarComponent } from './view/logado/cadastrar/cadastrar.component';
import { AgendaComponent } from './view/logado/agenda/agenda.component';
import { PerfilComponent } from './view/logado/perfil/perfil.component';
import { CriaAgendaComponent } from './view/logado/cria-agenda/cria-agenda.component';
import { CriaAgendamentoComponent } from './view/logado/agendamento/cria-agendamento/cria-agendamento.component';
import { CriarBarbeariaComponent } from './components/login/criar-barbearia/criar-barbearia.component'


const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
    children: [
      {
        path: "",
        component: LoginModalComponent
      },
      {
        path: "login",
        component: LoginModalComponent
      },
      {
        path: "criar-conta",
        component: CadastrarContaComponent
      },
      {
        path: "criar-barbearia",
        component: CriarBarbeariaComponent
      }

    ]
  },
  {
    path: "logado",
    component: LogadoComponent,
    children: [
      {
        path: "",
        component: DashboardComponent
      },
      {
        path: "dashboard",
        component: DashboardComponent
      },
      {
        path: "agendamento",
        component: AgendamentoComponent
      },
      {
        path: "cria-agendamento",
        component: CriaAgendamentoComponent
      },
      {
        path: "cadastrar",
        component: CadastrarComponent
      },
      {
        path: "agenda",
        component: AgendaComponent
      },
      {
        path: "cria-agenda",
        component: CriaAgendaComponent
      },
      {
        path: "perfil",
        component: PerfilComponent
      }

    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
