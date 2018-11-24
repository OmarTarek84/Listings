import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingsTableComponent } from './listings-table.component';

describe('ListingsTableComponent', () => {
  let component: ListingsTableComponent;
  let fixture: ComponentFixture<ListingsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
