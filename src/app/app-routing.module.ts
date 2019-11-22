import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevicesComponent } from './devices/devices.component';
import { HomeComponent } from './home/home.component';
import { AddDeviceComponent } from './add-device/add-device.component';


const routes: Routes = [
  { path: "devices", component: DevicesComponent },
  { path: "home", component: HomeComponent },
  { path: "add-device", component: AddDeviceComponent },
  { path: "**", redirectTo: "/home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
