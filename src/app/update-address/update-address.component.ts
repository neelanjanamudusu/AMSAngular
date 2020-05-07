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
     this.myservice.onUpdate(uaddress).subscribe(data => {
    alert(data)});
    this.router.navigate(['/viewaddress']);
  
  }
  ngOnInit(): void {
    
  }


}