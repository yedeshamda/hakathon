import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterProjectComponent } from './ajouter-project.component';

describe('AjouterProjectComponent', () => {
  let component: AjouterProjectComponent;
  let fixture: ComponentFixture<AjouterProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterProjectComponent]
    });
    fixture = TestBed.createComponent(AjouterProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
