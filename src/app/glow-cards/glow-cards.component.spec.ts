import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlowCardsComponent } from './glow-cards.component';

describe('GlowCardsComponent', () => {
  let component: GlowCardsComponent;
  let fixture: ComponentFixture<GlowCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlowCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlowCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
