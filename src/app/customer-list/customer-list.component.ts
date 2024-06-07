import { Component } from '@angular/core';
import { RideService } from '../service/ride.service';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {

  customers:any

  constructor(private service:RideService){
    this.service.isAuthenticated()


    this.ngOnInit()

  }

  ngOnInit(){

    this.service.getCustomer().subscribe(data=>this.customers=data)

  }

  handleDelete(id:any){

    this.service.deletCustomer(id).subscribe(data=>this.ngOnInit())
  }

  generatePDF(id:any){

    let customerDetaile=this.customers.find((cust:any)=>cust.id=id)

    const doc = new jsPDF()

    let body=[]

    for (let work of customerDetaile.works){
      body.push([work.title,work.description,work.amount])
    }

    autoTable(doc, {
      head: [['Title', 'Description', 'Amount']],
      body: body,
    })
  doc.save('table.pdf')

    
  }

}
