import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantMenuCategoryFormComponent } from './restaurant-menu-category-form.component';

describe('RestaurantMenuCategoryFormComponent', () => {
  let component: RestaurantMenuCategoryFormComponent;
  let fixture: ComponentFixture<RestaurantMenuCategoryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantMenuCategoryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantMenuCategoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
