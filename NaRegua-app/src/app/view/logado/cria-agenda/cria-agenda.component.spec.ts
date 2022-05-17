import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriaAgendaComponent } from './cria-agenda.component';

describe('CriaAgendaComponent', () => {
  let component: CriaAgendaComponent;
  let fixture: ComponentFixture<CriaAgendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriaAgendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriaAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
