import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


//views
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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginModalComponent,
    LogadoComponent,
    CadastrarContaComponent,
    DashboardComponent,
    AgendamentoComponent,
    CadastrarComponent,
    AgendaComponent,
    PerfilComponent,
    CriaAgendaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
