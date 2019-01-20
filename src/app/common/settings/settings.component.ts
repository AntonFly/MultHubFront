import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {


  val1: boolean = true;
  val2: boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
