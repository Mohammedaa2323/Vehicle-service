import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RideService } from '../service/ride.service';

@Component({
  selector: 'app-work-summery',
  templateUrl: './work-summery.component.html',
  styleUrls: ['./work-summery.component.css']
})
export class WorkSummeryComponent {

  custid : any

  constructor(private route:ActivatedRoute,private service :RideService){

    this.service.isAuthenticated()

    this.custid = this.route.snapshot.params["id"]

    console.log(this.custid);
    

  }

}
