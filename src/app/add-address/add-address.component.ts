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
  obj2:any;
  message: string;
  addressmanagement: AddressManagement;
  constructor(private myservice: MyserviceService,private router: Router) {
    // this.obj2 = this.myservice.addMethod();
   }

  ngOnInit(): void {
  }
  onSubmit(addaddress:AddressManagement):any{
    console.log(addaddress);
     this.myservice.onSubmit(addaddress).subscribe( data => {alert(data)});
     this.router.navigate(['']);
  }
  handleSuccessfulResponse(response: any) {
    this.addressmanagement = response;
  }

}
