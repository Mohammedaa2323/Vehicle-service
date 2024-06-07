import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDetailsAddComponent } from './customer-details-add.component';

describe('CustomerDetailsAddComponent', () => {
  let component: CustomerDetailsAddComponent;
  let fixture: ComponentFixture<CustomerDetailsAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerDetailsAddComponent]
    });  
    fixture = TestBed.createComponent(CustomerDetailsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
