import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantMenuTypeFormComponent } from './restaurant-menu-type-form.component';

describe('RestaurantMenuTypeFormComponent', () => {
  let component: RestaurantMenuTypeFormComponent;
  let fixture: ComponentFixture<RestaurantMenuTypeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantMenuTypeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantMenuTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
