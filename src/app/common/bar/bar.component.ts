import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {AuthenticationService, DataService, ViewService} from '../../_services';
import {MessageService} from 'primeng/api';
import {User} from '../../_models/index';
import {Alert} from 'selenium-webdriver';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

  user: boolean;
  check: boolean;
  user1: User;
  websocket: WebSocket;

  constructor(private dataServ: DataService,
              private route: ActivatedRoute,
              private router: Router,
              private data: DataService,
              private authenticationService: AuthenticationService,
              private viewService: ViewService,
              private messageService: MessageService
              ) { }

  ngOnInit() {
    // ~~~~~~~~~~~~~~~~~~~~WEBSOCKET~~~~~~~~~~~~~~~~~~~~~~~~~~//
    if(JSON.parse(localStorage.getItem('currentUser')).login) {
      this.websocket = new WebSocket('ws://localhost:8080/MultHubnew_war_exploded/echo/' +JSON.parse(localStorage.getItem('currentUser')).login);
      this.websocket.onopen = function (event: any) {
        console.log("Connected to webSocket");
        // event.target.send('OLAAAAA');
      };
      this.websocket.onclose = ( event => { console.log('Connection to webSocket is closed') });
      this.websocket.onmessage =  event =>  {
        if(JSON.parse(event.data).msg && JSON.parse(event.data).from) {
          this.updateMassages();
          this.showCustom(JSON.parse(event.data).msg, JSON.parse(event.data).from);
        }
      };
      this.websocket.onerror = ( event => { console.log('ERROR WHILE CONNECTING TO WEBSOCKET') });
    }
    // ~~~~~~~~~~~~~~~~~~~WEBSOCKET~~~~~~~~~~~~~~~~~~~~~~~~~~//


    this.route.url.subscribe(url => {
      console.log('redirect ' + url);
      this.check = !this.check;
    });

    if (localStorage.getItem('currentUser')) {  // for newsFeed in bar and ref to profile
      this.user = true;
    }
    else {this.user = false; }

  }

  quit(){
    this.authenticationService.logout();
  }

  naviigateToProfile() {
    this.router.navigate(['profile/' + JSON.parse(localStorage.getItem('currentUser')).login]);
  }


  getSearch(event: any) {
    if (event.keyCode === 13) {
      var data = event.target.value;
      alert(data);
      this.viewService.getSearch(data).subscribe(
        (res: any ) => {
          this.data.setSearch(res);
          alert( res);
          this.router.navigate(['/search']);
        },
        err => { alert(err)}
      );
    }
  }

  updateMassages(){
    this.dataServ.toggleNotific();
    this.dataServ.toggleNotific();
  }

  showCustom(msg, from) {
    this.messageService.add({key: 'custom', severity:'info', summary: 'Новое сообщение от ' + from, detail: msg});
  }

}

