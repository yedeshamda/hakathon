import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeStrategicPlanComponent } from './liste-strategic-plan.component';

describe('ListeStrategicPlanComponent', () => {
  let component: ListeStrategicPlanComponent;
  let fixture: ComponentFixture<ListeStrategicPlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeStrategicPlanComponent]
    });
    fixture = TestBed.createComponent(ListeStrategicPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
