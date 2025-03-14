import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProductosComponentComponent } from './card-productos-component.component';

describe('CardProductosComponentComponent', () => {
  let component: CardProductosComponentComponent;
  let fixture: ComponentFixture<CardProductosComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardProductosComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardProductosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
