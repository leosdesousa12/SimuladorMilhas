import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PontosPeriodoComponent } from './pontos-periodo.component';

describe('PontosPeriodoComponent', () => {
  let component: PontosPeriodoComponent;
  let fixture: ComponentFixture<PontosPeriodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PontosPeriodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PontosPeriodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
