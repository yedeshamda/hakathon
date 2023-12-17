import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutDesBesoinComponent } from './ajout-des-besoin.component';

describe('AjoutDesBesoinComponent', () => {
  let component: AjoutDesBesoinComponent;
  let fixture: ComponentFixture<AjoutDesBesoinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutDesBesoinComponent]
    });
    fixture = TestBed.createComponent(AjoutDesBesoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
