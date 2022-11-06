import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaserchComponent } from './reaserch.component';

describe('ReaserchComponent', () => {
  let component: ReaserchComponent;
  let fixture: ComponentFixture<ReaserchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReaserchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReaserchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
