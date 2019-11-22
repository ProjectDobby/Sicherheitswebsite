import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {

  constructor(private api: ApiService) { }
  private ws;
  ngOnInit() {
    this.ws = this.api.connect("ws://192.168.137.75");
    this.ws.next(JSON.stringify({hi:"hallo"}));
  }

}
