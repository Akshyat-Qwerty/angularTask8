import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesSystemComponent } from './sales-system.component';

describe('SalesSystemComponent', () => {
  let component: SalesSystemComponent;
  let fixture: ComponentFixture<SalesSystemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalesSystemComponent]
    });
    fixture = TestBed.createComponent(SalesSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
