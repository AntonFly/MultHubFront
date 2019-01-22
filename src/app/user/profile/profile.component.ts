import { Component, OnInit } from '@angular/core';
import {UserService, ViewService} from '../../_services';
import {ActivatedRoute, Router} from '@angular/router';
import {__param, __values} from 'tslib';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  pic: File;
  // message: string = 'mess';
  name: string;
  login: string;
  posts;
  picShown: boolean = false;

  constructor(
    private router2: Router,
    private router: ActivatedRoute,
              private userServ: UserService,
              private  viewServ: ViewService) { }

  ngOnInit() {
    console.log(this.router.params);
    this.router.params.subscribe(value => this.viewServ.getProfileById(value.login).subscribe(
      (response: any) => {
          this.name = response.user.name;
          this.login = response.user.login;
          if (response.posts.length !== 0)
          this.posts = response.posts[0].text;
          this.picShown = true;
      },error1 => {this.router2.navigate(['notFound'])}
    ));
  }

  onFileSelected(event) {
    var reader  = new FileReader();
    console.log(event);
    this.pic = <File>event.target.files[0];
    this.userServ.sendPhoto(this.pic).subscribe(
      response => {
          alert(response);
      });
    alert(this.pic.name);

    // var img  = document.getElementById("img") as HTMLImageElement;
    // if (this.pic) {
    //   reader.readAsDataURL(event.target.files[0]);
    //   img.src = reader.result;
    // } else {
    //   img.src = "";
    // }
  }
  sendMessage()
  {
    alert('lol');
    this.userServ.sendMessage('diva','xam_lua', 'lolkek',2).subscribe(response => {alert(response); });
  }
}
