import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProductoComponent } from './card-producto.component';

describe('CardProductoComponent', () => {
  let component: CardProductoComponent;
  let fixture: ComponentFixture<CardProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardProductoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
