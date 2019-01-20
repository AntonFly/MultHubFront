import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {AuthenticationService, DataService, ViewService} from '../../_services';
import {User} from '../../_models/index';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

  user: boolean;
  check: boolean;
  user1: User;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private data: DataService,
              private authenticationService: AuthenticationService,
              private viewService: ViewService
              ) { }

  ngOnInit() {

    // var eventSource = new EventSource('http://localhost:8080/MultHubnew_war_exploded/resources/messages');
    //
    // eventSource.onmessage = function(e) {
    //   console.log("Пришло сообщение: " + e.data);
    // };
    //
    // eventSource.onopen = function(e) {
    //   console.log("Соединение открыто");
    // };

    this.data.currentUser.subscribe( user => {
      this.user1 = user;
    });

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
    this.data.deleteUser();
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

}
