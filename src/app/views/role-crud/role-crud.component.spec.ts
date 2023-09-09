import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleCrudComponent } from './role-crud.component';

describe('RoleCrudComponent', () => {
  let component: RoleCrudComponent;
  let fixture: ComponentFixture<RoleCrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoleCrudComponent]
    });
    fixture = TestBed.createComponent(RoleCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
