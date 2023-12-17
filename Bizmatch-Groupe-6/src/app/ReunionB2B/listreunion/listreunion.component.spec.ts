import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListreunionComponent } from './listreunion.component';

describe('ListreunionComponent', () => {
  let component: ListreunionComponent;
  let fixture: ComponentFixture<ListreunionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListreunionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListreunionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
