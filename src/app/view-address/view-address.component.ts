import { Component, OnInit } from '@angular/core';
import { MyserviceService ,AddressManagement} from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-address',
  templateUrl: './view-address.component.html',
  styleUrls: ['./view-address.component.css']
})
export class ViewAddressComponent implements OnInit {
  [x: string]: any;

  message: string;
  addressmanagement: AddressManagement;
  constructor(private myservice: MyserviceService, private router: Router) {
  }

  address:AddressManagement;
  retailerId:number;
  
  ngOnInit(): void 
 {
   let retailerId=this.routing.snapshot.paramMap.get('retailerId');
   let retailerIdnum=Number(retailerId)
   this.service.viewproduct(retailerIdnum).subscribe(
   response =>this.handleSuccessfulResponse(response),
  );
}
  handleSuccessfulResponse(response) {
    this.addressmanagement = response;
  }
  update(updateaddress: AddressManagement) {
    this.myservice.updateAddress(updateaddress);
    this.router.navigate(['/updateproduct']);
  }
  delete(deleteaddress: AddressManagement): any {
    this.myservice.delete(deleteaddress.retailerId).subscribe(data => {
      alert(data)});
    this.router.navigate(['/viewaddress']);
  }


}