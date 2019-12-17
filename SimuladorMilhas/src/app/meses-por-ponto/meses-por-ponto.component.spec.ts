import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesesPorPontoComponent } from './meses-por-ponto.component';

describe('MesesPorPontoComponent', () => {
  let component: MesesPorPontoComponent;
  let fixture: ComponentFixture<MesesPorPontoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesesPorPontoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesesPorPontoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
