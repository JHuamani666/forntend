import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialDePedidosComponent } from './historial-de-pedidos.component';

describe('HistorialDePedidosComponent', () => {
  let component: HistorialDePedidosComponent;
  let fixture: ComponentFixture<HistorialDePedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistorialDePedidosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistorialDePedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
