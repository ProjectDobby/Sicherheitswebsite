import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.scss']
})
export class AddDeviceComponent implements OnInit {
  
  Name = "test";
  MacAdresse = "12ab:1324:asdb";
  constructor() { }

  ngOnInit() {
  }

}
