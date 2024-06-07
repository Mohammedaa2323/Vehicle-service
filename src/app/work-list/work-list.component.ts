import { Component, Input, OnInit } from '@angular/core';
import { RideService } from '../service/ride.service';

@Component({
  selector: 'app-work-list',
  templateUrl: './work-list.component.html',
  styleUrls: ['./work-list.component.css']
})
export class WorkListComponent implements OnInit{

  @Input() custid:any

  works : any

  workTotal:number=0

  constructor(private service:RideService){
    
    this.service.refreshRequired.subscribe(data=>{
      this.ngOnInit()
    }
    )

  }

  ngOnInit(): void {
    
    console.log("work create",this.custid);


    this.service.retriveCustomer(this.custid).subscribe((data:any)=>{


      this.works=data?.works
 
      this.workTotal=data?.work_total
    })
    

  }

}
