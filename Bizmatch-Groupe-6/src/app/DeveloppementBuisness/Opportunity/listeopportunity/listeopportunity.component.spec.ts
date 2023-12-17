import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeopportunityComponent } from './listeopportunity.component';

describe('ListeopportunityComponent', () => {
  let component: ListeopportunityComponent;
  let fixture: ComponentFixture<ListeopportunityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeopportunityComponent]
    });
    fixture = TestBed.createComponent(ListeopportunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
