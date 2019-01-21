import {Component, Input, OnInit} from '@angular/core';
import {UserService, ViewService} from '../../_services';
import {ActivatedRoute} from '@angular/router';
import {ArrayType} from '@angular/compiler';

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.css']
})
export class DialogsComponent implements OnInit {
  @Input('postObj') postObj: string;

  dialogs: object[];

  constructor() {

  }

  ngOnInit() {
    // this.dialogs = JSON.parse(this.postObj);
  // console.log('!!!!!!!!!!!!!!!!!DIALOGS');
  // if (this.postObj[0])
  //   alert('НУЛЕВОЙ НА МЕСТЕ')
  //   console.log(typeof this.postObj)
  // console.log( this.postObj[0]);
  // console.log(this.dialogs[0])
  }
}
