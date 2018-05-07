import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantMenuTypesComponent } from './restaurant-menu-types.component';

describe('RestaurantMenuTypesComponent', () => {
  let component: RestaurantMenuTypesComponent;
  let fixture: ComponentFixture<RestaurantMenuTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantMenuTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantMenuTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
