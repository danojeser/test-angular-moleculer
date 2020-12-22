import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCommercialComponent } from './main-commercial.component';

describe('MainCommercialComponent', () => {
  let component: MainCommercialComponent;
  let fixture: ComponentFixture<MainCommercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCommercialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCommercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
