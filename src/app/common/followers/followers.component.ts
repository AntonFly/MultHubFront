import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
@Input("users") users: any[];
  constructor() { }

  ngOnInit() {
  }

}
