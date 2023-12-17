import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifieropportunityComponent } from './modifieropportunity.component';

describe('ModifieropportunityComponent', () => {
  let component: ModifieropportunityComponent;
  let fixture: ComponentFixture<ModifieropportunityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifieropportunityComponent]
    });
    fixture = TestBed.createComponent(ModifieropportunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
