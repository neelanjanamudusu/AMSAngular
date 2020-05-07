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
    this.status=false;
  }
 
  retailerId:number;
  status: boolean;
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
      alert(data)}
    );
    
  }
  tofetch(retailerId:number){
    console.log(retailerId);
    this.validate(retailerId);
  //   if(this.status == true){
  //     this.myservice.tofetch(retailerId).subscribe(
  //     response =>this.handleSuccessfulResponse(response),
  //    );
  // }
}

  handleSuccessfulResponse(response) {
    this.status=true;
    this.addressmanagement = response;
    
    
  }

validate(retailerId:number)
{
  //console.log(retailerId);
  if(retailerId != null){

   this.status=true;
   this.myservice.tofetch(retailerId).subscribe(
    response =>this.handleSuccessfulResponse(response),
   );
  }
   else{ 
   this.status=false;
   this.messag="not valid retailerId";
   }
}

}
