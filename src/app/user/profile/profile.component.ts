import { Component, OnInit } from '@angular/core';
import {UserService, ViewService} from '../../_services';
import {ActivatedRoute} from '@angular/router';
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
  posts;

  constructor(private router: ActivatedRoute,
              private userServ: UserService,
              private  viewServ: ViewService) { }

  ngOnInit() {
    console.log(this.router.params);
    this.router.params.subscribe(value => this.viewServ.getProfileById(value.login).subscribe(
      (response: any) => {
          this.name = response.user.name;
          if (response.posts.length !== 0)
          this.posts = response.posts[0].text;
      }
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
    this.userServ.sendMessage('mess').subscribe(response => {alert(response); });
  }
}
