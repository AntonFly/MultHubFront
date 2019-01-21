import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-user-pointer',
  templateUrl: './user-pointer.component.html',
  styleUrls: ['./user-pointer.component.css']
})
export class UserPointerComponent implements OnInit {

  @Input('user') user: any;
  constructor() { }
  items: MenuItem[];

  ngOnInit() {
    var positions = JSON.parse(localStorage.getItem('positions'))
    console.log('in user pointer');
    console.log(this.user.login);
    if(positions.length > 0)
    this.items= [
      {label: 'send message', url: '', routerLink: '' },
      {
        label: 'send message',
        icon: 'pi pi-comments',
        items: [{
          label: 'New',
          icon: 'pi pi-fw pi-plus',
          items: [
            {label: 'Project'},
            {label: 'Other'},
          ]
        },
          {label: 'Open'},
          {separator:true},
          {label: 'Quit'}
        ]
      }
    ]



  }

}
