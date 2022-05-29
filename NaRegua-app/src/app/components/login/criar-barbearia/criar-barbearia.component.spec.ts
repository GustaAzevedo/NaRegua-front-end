import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarBarbeariaComponent } from './criar-barbearia.component';

describe('CriarBarbeariaComponent', () => {
  let component: CriarBarbeariaComponent;
  let fixture: ComponentFixture<CriarBarbeariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarBarbeariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarBarbeariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
