import { Component } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms'
import { RideService } from '../service/ride.service';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = new FormGroup({
    "username": new FormControl("", Validators.required),

    "password": new FormControl("", Validators.required)
  })

  constructor(private service: RideService, private router: Router) { 

    this.service.isAuthenticated()


  }

  handleSubmit() {
    let formData = this.loginForm.value

    this.service.getTokenPair(formData).subscribe((data: any) => {

      localStorage.setItem("refreshToken", data.refresh)

      localStorage.setItem("accessToken", data.access)

      this.service.isAuthenticated()

      this.router.navigateByUrl("customers")

    },

      (error: any) => {

        alert("faild to login...")

      }

    )

  }

}
