import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDetaileListComponent } from './customer-detaile-list.component';

describe('CustomerDetaileListComponent', () => {
  let component: CustomerDetaileListComponent;
  let fixture: ComponentFixture<CustomerDetaileListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerDetaileListComponent]
    });
    fixture = TestBed.createComponent(CustomerDetaileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
