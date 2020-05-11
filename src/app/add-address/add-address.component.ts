import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService, AddressManagement } from '../myservice.service';


@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {
  [x: string]: any;
  addressmanagement: AddressManagement;
  constructor(private myservice: MyserviceService,private router: Router) {
   }

  ngOnInit(): void {
  }
  onSubmit(addaddress:AddressManagement):any{
    addaddress.addressId=Math.random();
    console.log(addaddress);
     this.myservice.onSubmit(addaddress).subscribe( data => {
    if(data!=null)
      alert("addedd address successfully eith AddressId:"+data.addressId)
    else
      alert("adding address failed")

  this.router.navigate(['']);
    });
  }
  handleSuccessfulResponse(response: any) {
    this.addressmanagement = response;
  }

}
