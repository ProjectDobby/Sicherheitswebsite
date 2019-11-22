import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { DevicesComponent } from './devices/devices.component';
import { HomeComponent } from './home/home.component';
import { AddDeviceComponent } from './add-device/add-device.component';
import { ApiService } from './api.service';


@NgModule({
  declarations: [
    AppComponent,
    DevicesComponent,
    HomeComponent,
    AddDeviceComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatCardModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
