import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmotionComponent } from './emotion.component';

describe('EmotionComponent', () => {
  let component: EmotionComponent;
  let fixture: ComponentFixture<EmotionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmotionComponent]
    });
    fixture = TestBed.createComponent(EmotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
