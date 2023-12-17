import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutProfilComponent } from './ajout-profil.component';

describe('AjoutProfilComponent', () => {
  let component: AjoutProfilComponent;
  let fixture: ComponentFixture<AjoutProfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutProfilComponent]
    });
    fixture = TestBed.createComponent(AjoutProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
