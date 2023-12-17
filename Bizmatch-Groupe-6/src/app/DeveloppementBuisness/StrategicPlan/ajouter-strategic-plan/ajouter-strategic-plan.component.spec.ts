import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterStrategicPlanComponent } from './ajouter-strategic-plan.component';

describe('AjouterStrategicPlanComponent', () => {
  let component: AjouterStrategicPlanComponent;
  let fixture: ComponentFixture<AjouterStrategicPlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterStrategicPlanComponent]
    });
    fixture = TestBed.createComponent(AjouterStrategicPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
