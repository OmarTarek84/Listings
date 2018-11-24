import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddListingsComponent } from './add-listings.component';

describe('AddListingsComponent', () => {
  let component: AddListingsComponent;
  let fixture: ComponentFixture<AddListingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddListingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
