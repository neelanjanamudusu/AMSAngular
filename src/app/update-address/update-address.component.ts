import { Component, OnInit } from '@angular/core';
import {  MyserviceService, AddressManagement } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-address',
  templateUrl: './update-address.component.html',
  styleUrls: ['./update-address.component.css']
})
export class UpdateAddressComponent implements OnInit {

  obj1: any;
  addressmanagement: AddressManagement;
  message: string;
  constructor(private myservice: MyserviceService, private router: Router) {
    this.obj1 = this.myservice.updateMethod();
    
  }
  onUpdate(uaddress: AddressManagement): any {
    console.log(uaddress.retailerId)
     this.myservice.onUpdate(uaddress).subscribe(data => {
       if(data!=null)
           alert("Updated address detailes for retailerId: "+uaddress.retailerId)
        else
          alert("Update unsuccessful because of invalid addressId")
    this.router.navigate(['/viewaddress']);
     });
  }
  ngOnInit(): void {
    
  }


}