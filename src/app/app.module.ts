import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAddressComponent } from './add-address/add-address.component';
import { ViewAddressComponent } from './view-address/view-address.component';
import { UpdateAddressComponent } from './update-address/update-address.component';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddAddressComponent,
    ViewAddressComponent,
    UpdateAddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
