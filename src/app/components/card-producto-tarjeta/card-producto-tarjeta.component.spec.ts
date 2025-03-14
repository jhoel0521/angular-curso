import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProductoTarjetaComponent } from './card-producto-tarjeta.component';

describe('CardProductoTarjetaComponent', () => {
  let component: CardProductoTarjetaComponent;
  let fixture: ComponentFixture<CardProductoTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardProductoTarjetaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardProductoTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
