import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GastoPorPontoComponent } from './gasto-por-ponto.component';

describe('GastoPorPontoComponent', () => {
  let component: GastoPorPontoComponent;
  let fixture: ComponentFixture<GastoPorPontoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastoPorPontoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GastoPorPontoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
