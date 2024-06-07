import { Component, Input, OnInit } from '@angular/core';

import {FormGroup,FormControl,Validators} from '@angular/forms'
import { RideService } from '../service/ride.service';

@Component({
  selector: 'app-work-create',
  templateUrl: './work-create.component.html',
  styleUrls: ['./work-create.component.css']
})
export class WorkCreateComponent implements OnInit {

  @Input() custid:any

  constructor(private service:RideService){

  }

  ngOnInit(): void {
    
    console.log("work create",this.custid);
    

  }

workForm=new FormGroup({

  title : new FormControl("",Validators.required),

  description : new FormControl("",Validators.required),

  amount :new FormControl("",Validators.required)

})

handleSubmit(){
  let formData=this.workForm.value

console.log(formData);

this.service.createWork(this.custid,formData).subscribe(data=>{console.log(data);

  this.service.refreshWorkList()

  this.workForm.reset()
      
})

}

}

