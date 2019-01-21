import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService, ViewService} from '../../_services';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  pic: File;
  name: string;
  user: any;
  img: any;
  val1: boolean = true;
  val2: boolean = true;
  constructor(private router: ActivatedRoute,
              private userServ: UserService,
              private  viewServ: ViewService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    this.router.params.subscribe(value => this.viewServ.getProfileById(value.login).subscribe(
      (response: any) => {
        this.name = response.user.name;
        // this.login = response.user.login;

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
  reload() {
    var img: any  = document.getElementById('img') as HTMLImageElement;
    img.src = 'http://localhost:8080/MultHubnew_war_exploded/resources/user/getAvatar' + this.user.login;
  }


}
