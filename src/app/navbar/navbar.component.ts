import { Component } from '@angular/core';
import { RideService } from '../service/ride.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  loggedIn : boolean = false

  constructor(private service:RideService,private router:Router){

    this.service.loggedInSubject.subscribe((data:any)=>this.loggedIn=data)

  }

signOut(){

 localStorage.clear()

 this.router.navigateByUrl("")

}

}
