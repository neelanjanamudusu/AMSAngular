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
  public addressmanagement: AddressManagement[];
  constructor(private myservice: MyserviceService, private router: Router) {
  }
  retailerId:number;
  ngOnInit(): void 
 {
  
}
  update(updateaddress: AddressManagement) {
    this.myservice.updateAddress(updateaddress);
    this.router.navigate(['/updateaddress']);
  }
  delete(address:AddressManagement): any {
    console.log(address.addressId);
    this.myservice.delete(address.addressId).subscribe(data => {
      alert(data)});
    
  }
  tofetch(retailerId:number){
    console.log(retailerId);
      this.myservice.tofetch(retailerId).subscribe(
      response =>this.handleSuccessfulResponse(response),
    
  
     );
  }

  handleSuccessfulResponse(response) {
    this.addressmanagement = response;
    console.log(response);
    
  }

}
