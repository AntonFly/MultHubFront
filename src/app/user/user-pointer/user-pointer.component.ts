import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-pointer',
  templateUrl: './user-pointer.component.html',
  styleUrls: ['./user-pointer.component.css']
})
export class UserPointerComponent implements OnInit {

  @Input('user') user: any;
  constructor() { }

  ngOnInit() {
    console.log('in user pointer');
    console.log(this.user.login);
  }

}
