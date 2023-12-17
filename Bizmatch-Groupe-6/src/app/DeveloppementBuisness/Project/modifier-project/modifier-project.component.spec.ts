import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierProjectComponent } from './modifier-project.component';

describe('ModifierProjectComponent', () => {
  let component: ModifierProjectComponent;
  let fixture: ComponentFixture<ModifierProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierProjectComponent]
    });
    fixture = TestBed.createComponent(ModifierProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
