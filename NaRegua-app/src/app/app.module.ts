import { AuthTokenInterceptor } from './interceptors/auth-token.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

//  Materia
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { CriaAgendamentoComponent } from './view/logado/agendamento/cria-agendamento/cria-agendamento.component';
import { CriarBarbeariaComponent } from './components/login/criar-barbearia/criar-barbearia.component'


// Parte para identificar local
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { DatePipe } from '@angular/common';

registerLocaleData(localePt, 'pt');

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
    CriaAgendamentoComponent,
    CriarBarbeariaComponent
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
    { provide: LOCALE_ID, useValue: 'pt' },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL'
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
