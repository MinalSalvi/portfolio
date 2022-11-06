import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoLecComponent } from './video-lec.component';

describe('VideoLecComponent', () => {
  let component: VideoLecComponent;
  let fixture: ComponentFixture<VideoLecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoLecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoLecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
