import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  DevicesCount = 1;
  AlertsCount = 0;

  constructor() { }

  ngOnInit() {
  }

}
