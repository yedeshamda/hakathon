import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSharedComponenetComponent } from './main-shared-componenet.component';

describe('MainSharedComponenetComponent', () => {
  let component: MainSharedComponenetComponent;
  let fixture: ComponentFixture<MainSharedComponenetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainSharedComponenetComponent]
    });
    fixture = TestBed.createComponent(MainSharedComponenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
