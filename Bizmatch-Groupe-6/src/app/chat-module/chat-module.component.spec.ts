import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatModuleComponent } from './chat-module.component';

describe('ChatModuleComponent', () => {
  let component: ChatModuleComponent;
  let fixture: ComponentFixture<ChatModuleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatModuleComponent]
    });
    fixture = TestBed.createComponent(ChatModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
