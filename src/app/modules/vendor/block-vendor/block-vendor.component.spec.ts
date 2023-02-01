import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockVendorComponent } from './block-vendor.component';

describe('BlockVendorComponent', () => {
  let component: BlockVendorComponent;
  let fixture: ComponentFixture<BlockVendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockVendorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
