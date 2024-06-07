import { Component } from '@angular/core';
import { RideService } from '../service/ride.service';

import { ActivatedRoute }  from '@angular/router'

@Component({
  selector: 'app-customer-detaile-list',
  templateUrl: './customer-detaile-list.component.html',
  styleUrls: ['./customer-detaile-list.component.css']
})
export class CustomerDetaileListComponent {

  id:any

  customer:any
  constructor(private router:ActivatedRoute,private service:RideService){

    this.service.isAuthenticated()

    this.id = this.router.snapshot.params["id"]

    this.service.retriveCustomer(this.id).subscribe(data=>this.customer=data)
   
  }



  


}
