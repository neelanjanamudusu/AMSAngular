import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAddressComponent } from './add-address/add-address.component';
import { ViewAddressComponent } from './view-address/view-address.component';
import { UpdateAddressComponent } from './update-address/update-address.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MyserviceService } from './myservice.service';

@NgModule({
  declarations: [
    AppComponent,
    AddAddressComponent,
    ViewAddressComponent,
    UpdateAddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [HttpClient, MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
