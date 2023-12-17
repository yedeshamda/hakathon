import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDesBesoinComponent } from './liste-des-besoin.component';

describe('ListeDesBesoinComponent', () => {
  let component: ListeDesBesoinComponent;
  let fixture: ComponentFixture<ListeDesBesoinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeDesBesoinComponent]
    });
    fixture = TestBed.createComponent(ListeDesBesoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
