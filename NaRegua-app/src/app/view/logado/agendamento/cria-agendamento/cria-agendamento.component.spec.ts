import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriaAgendamentoComponent } from './cria-agendamento.component';

describe('CriaAgendamentoComponent', () => {
  let component: CriaAgendamentoComponent;
  let fixture: ComponentFixture<CriaAgendamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriaAgendamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriaAgendamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
