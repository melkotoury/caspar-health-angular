import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTherapistsComponent } from './admin-therapists.component';

describe('AdminTherapistsComponent', () => {
  let component: AdminTherapistsComponent;
  let fixture: ComponentFixture<AdminTherapistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTherapistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTherapistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
