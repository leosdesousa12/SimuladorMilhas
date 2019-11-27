import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PontosPorGastoComponent } from './pontos-por-gasto.component';

describe('PontosPorGastoComponent', () => {
  let component: PontosPorGastoComponent;
  let fixture: ComponentFixture<PontosPorGastoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PontosPorGastoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PontosPorGastoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
