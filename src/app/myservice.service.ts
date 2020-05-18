import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
  })
export class MyserviceService {
    updateaddress: AddressManagement;
    addaddress: AddressManagement;
    AddressManagement: AddressManagement;
    constructor(private httpService: HttpClient) { }
  
    public tofetch(retailerId: number) {
    console.log("ins service get address");
    console.log(retailerId);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get<AddressManagement>("http://localhost:2099/View/GetAddress/"+retailerId,{headers, responseType:'json'});
  }
  public addAddress(addaddress: AddressManagement) {
    this.addaddress = addaddress;
  }
  public addMethod() {
    return this.addAddress;
  }
  public onSubmit(addAddress: AddressManagement) {
    console.log("ins service add");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.post("http://localhost:2021/Add/AddAddress", addAddress,  { headers, responseType: 'text'});
  }
  public updateAddress(updateAddress: AddressManagement) {
    this.updateaddress = updateAddress;
  }
  public updateMethod() {
    return this.updateAddress;
  }
  public onUpdate(updateAddress: AddressManagement) {
    console.log("ins service update");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.put("http://localhost:2066/Update/UpdateAddress", updateAddress,  { headers, responseType: 'text'});
  }
  delete(addressId: number) {
    console.log("ins service delete");
    console.log(addressId);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.delete("http://localhost:2023/Delete/DeleteAddress/"+addressId,  { headers, responseType: 'json'});
  }
}
export class AddressManagement {
    addressId: number;
    city: string;
    buildingnumber: string;
    district: string;
    pincode: number;
    retailerId: number;
    state: string;
    streetnumber: string;
    constructor( addressId: number, buildingnumber: string, city: string, district: string,  pincode: number, retailerId: number, state: string, streetnumber: string)
    {
        this.addressId=addressId;
        this.buildingnumber=buildingnumber;
        this.city=city;
        this.district=district;
        this.pincode=pincode;
        this.retailerId=retailerId;
        this.state=state;
        this.streetnumber=streetnumber;
    }
  }