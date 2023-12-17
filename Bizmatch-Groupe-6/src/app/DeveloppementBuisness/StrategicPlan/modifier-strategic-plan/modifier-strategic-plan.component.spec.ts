import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierStrategicPlanComponent } from './modifier-strategic-plan.component';

describe('ModifierStrategicPlanComponent', () => {
  let component: ModifierStrategicPlanComponent;
  let fixture: ComponentFixture<ModifierStrategicPlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierStrategicPlanComponent]
    });
    fixture = TestBed.createComponent(ModifierStrategicPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
