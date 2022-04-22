import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarContaComponent } from './cadastrar-conta.component';

describe('CadastrarContaComponent', () => {
  let component: CadastrarContaComponent;
  let fixture: ComponentFixture<CadastrarContaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarContaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
