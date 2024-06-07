import { Component } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms'
import { RideService } from '../service/ride.service';

import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-customer-details-add',
  templateUrl: './customer-details-add.component.html',
  styleUrls: ['./customer-details-add.component.css']
})
export class CustomerDetailsAddComponent {

  cust_id: any

  isEdit: boolean = false


  constructor(private service: RideService, private router: Router, private route: ActivatedRoute) {
    this.service.isAuthenticated()


    this.cust_id = this.route.snapshot.queryParams["cust_id"]

    if (this.cust_id) {

      this.isEdit = true

      this.initilaisForm()

      // console.log(this.isEdit);


    }
  }

  initilaisForm() {

    this.service.retriveCustomer(this.cust_id).subscribe(data => {

      this.customerForm.patchValue(data)
    })

  }


  customerForm = new FormGroup({
    name: new FormControl("", Validators.required),

    phone: new FormControl("", Validators.required),

    email: new FormControl("", Validators.required),

    "vehicle_no": new FormControl("", Validators.required),

    "running_km": new FormControl("", Validators.required)
  })

  handleSubmit() {
    let formdata = this.customerForm.value

    // console.log(formdata);

    if (this.isEdit) {// if the isEdit == true update the formdata

      this.service.updateCustomer(this.cust_id, formdata).subscribe(data => {
        this.router.navigateByUrl("customers")
      })
    }
    else
      this.service.creatCustomer(formdata).subscribe((data: any) => {
        // console.log(data);
        this.router.navigateByUrl(`worksummery/${data.id}`)

      })


  }

}
