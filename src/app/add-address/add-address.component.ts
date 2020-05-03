import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService, AddressManagement } from '../myservice.service';


@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {
  message: string;

  constructor(private myservice: MyserviceService,private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(addaddress:AddressManagement):any{
    console.log(addaddress);
     this.myservice.addAddress(addaddress).subscribe(data => {
      message:data});
  }

}
