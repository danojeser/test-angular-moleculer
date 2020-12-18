import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexCommercialComponent } from './index-commercial.component';

describe('IndexCommercialComponent', () => {
  let component: IndexCommercialComponent;
  let fixture: ComponentFixture<IndexCommercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexCommercialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexCommercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
