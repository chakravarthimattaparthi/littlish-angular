import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentsTestimonialComponent } from './parents-testimonial.component';

describe('ParentsTestimonialComponent', () => {
  let component: ParentsTestimonialComponent;
  let fixture: ComponentFixture<ParentsTestimonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentsTestimonialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentsTestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
