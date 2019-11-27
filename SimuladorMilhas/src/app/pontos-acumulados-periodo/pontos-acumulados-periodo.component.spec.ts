import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PontosAcumuladosPeriodoComponent } from './pontos-acumulados-periodo.component';

describe('PontosAcumuladosPeriodoComponent', () => {
  let component: PontosAcumuladosPeriodoComponent;
  let fixture: ComponentFixture<PontosAcumuladosPeriodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PontosAcumuladosPeriodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PontosAcumuladosPeriodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
