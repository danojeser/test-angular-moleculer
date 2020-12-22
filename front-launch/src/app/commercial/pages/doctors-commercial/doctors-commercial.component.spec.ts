import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsCommercialComponent } from './doctors-commercial.component';

describe('DoctorsCommercialComponent', () => {
  let component: DoctorsCommercialComponent;
  let fixture: ComponentFixture<DoctorsCommercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorsCommercialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorsCommercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
