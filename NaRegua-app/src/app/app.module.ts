import { AuthTokenInterceptor } from './interceptors/auth-token.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

//  Materia
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DatePipe } from '@angular/common'

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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [
    DatePipe,
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthTokenInterceptor,
      multi: true
    },
    { provide: LOCALE_ID, useValue: 'pt' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
