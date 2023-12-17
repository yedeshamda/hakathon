import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierDesBesoinComponent } from './modifier-des-besoin.component';

describe('ModifierDesBesoinComponent', () => {
  let component: ModifierDesBesoinComponent;
  let fixture: ComponentFixture<ModifierDesBesoinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierDesBesoinComponent]
    });
    fixture = TestBed.createComponent(ModifierDesBesoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
