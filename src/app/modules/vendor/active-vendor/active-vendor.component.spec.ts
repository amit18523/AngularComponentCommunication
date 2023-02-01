import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveVendorComponent } from './active-vendor.component';

describe('ActiveVendorComponent', () => {
  let component: ActiveVendorComponent;
  let fixture: ComponentFixture<ActiveVendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveVendorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
