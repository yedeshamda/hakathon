import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeProfilComponent } from './liste-profil.component';

describe('ListeProfilComponent', () => {
  let component: ListeProfilComponent;
  let fixture: ComponentFixture<ListeProfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeProfilComponent]
    });
    fixture = TestBed.createComponent(ListeProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
