import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriesCommercialComponent } from './stories-commercial.component';

describe('StoriesCommercialComponent', () => {
  let component: StoriesCommercialComponent;
  let fixture: ComponentFixture<StoriesCommercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoriesCommercialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoriesCommercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
