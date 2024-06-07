import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RideService {

loggedInSubject = new Subject()

refreshRequired= new Subject()

  constructor(private http:HttpClient) { }

getCustomer(){

  return this.http.get("http://127.0.0.1:8000/api/customers/",{"headers":this.getHeaders()})

}

retriveCustomer(id:any){

  return this.http.get(`http://127.0.0.1:8000/api/customers/${id}/`,{"headers":this.getHeaders()})

}

creatCustomer(data:any){

  return this.http.post("http://127.0.0.1:8000/api/customers/",data,{"headers":this.getHeaders()})

}

updateCustomer(id:any,data:any){

  return this.http.put(`http://127.0.0.1:8000/api/customers/${id}/`,data,{"headers":this.getHeaders()})
}

deletCustomer(id:any){

  return this.http.delete(`http://127.0.0.1:8000/api/customers/${id}/`,{"headers":this.getHeaders()})

}

getTokenPair(data:any){

  return this.http.post("http://127.0.0.1:8000/api/token/",data)

}

getAccessToken(){

  return localStorage.getItem("accessToken")
}

getHeaders(){

  let token = this.getAccessToken()

  let headers = new HttpHeaders().set("Authorization","Bearer "+token)

  return headers

}

isAuthenticated(){

  this.loggedInSubject.next( "accessToken" in localStorage ? true : false)

}

createWork(id:any,data:any){

  return this.http.post(`http://127.0.0.1:8000/api/customer/${id}/work/`,data,{headers:this.getHeaders()})

}

refreshWorkList(){

  this.refreshRequired.next(true)
}

}