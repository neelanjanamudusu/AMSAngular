import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewAddressComponent } from './view-address/view-address.component';
import { AddAddressComponent } from './add-address/add-address.component';
import { UpdateAddressComponent } from './update-address/update-address.component';



const routes: Routes = [
{path:'viewaddress',component:ViewAddressComponent},
{path:'addaddress',component:AddAddressComponent},
{path:'updateaddress',component:UpdateAddressComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }