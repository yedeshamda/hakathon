import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouteropportunityComponent } from './ajouteropportunity.component';

describe('AjouteropportunityComponent', () => {
  let component: AjouteropportunityComponent;
  let fixture: ComponentFixture<AjouteropportunityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouteropportunityComponent]
    });
    fixture = TestBed.createComponent(AjouteropportunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
