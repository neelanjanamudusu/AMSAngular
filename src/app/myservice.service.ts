import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  AddressManagement: AddressManagement;
  updateaddress: AddressManagement;
  constructor(private httpService: HttpClient) { }
  public getAddress(retailerId: number) {
    console.log("ins service get product");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get<AddressManagement>("http://localhost:4800/AddressManagement/GetAddress"+retailerId,{headers, responseType:'json'});
  }

  public addAddress(addaddress: AddressManagement) {
    console.log("ins service add");
    console.log(addaddress);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.post("http://localhost:4800/AddressManagement/AddAddress", addaddress,  { headers, responseType: 'json'});
  }
  
  public updateAddress(updateaddress: AddressManagement) {
    this.updateaddress = updateaddress;
  }
  public updateMethod() {
    return this.updateaddress;
  }
  public onUpdate(updateaddress: AddressManagement) {
    console.log("ins service update");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.put("http://localhost:4800/AddressManagement/UpdateAddress", updateaddress,  { headers, responseType: 'json'});
  }
  delete(retailerId: number) {
    console.log("ins service delete");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.delete("http://localhost:4800/AddressManagement/DeleteAddress/" + retailerId,  { headers, responseType: 'json'});
  }
}
export class AddressManagement {
  retailerId: number;
  addressId: number;
  housenumber: string;
  streetnumber: string;
  city: string;
  district: string;
  state: string;
  pincode: number;
  constructor(retailerId: number, addressId: number, housenumber: string, streetnumber: string, city: string, district: string, state: string, pincode: number)
  {
    this.retailerId=retailerId;
    this.addressId=addressId;
    this.housenumber=housenumber;
    this.streetnumber= streetnumber;
    this.city= city;
    this.district=district;
    this.state= state;
    this.pincode=pincode;
  }
}