import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCorporateComponent } from './new-corporate.component';

describe('NewCorporateComponent', () => {
  let component: NewCorporateComponent;
  let fixture: ComponentFixture<NewCorporateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCorporateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCorporateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
