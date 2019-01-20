import { Component, OnInit } from '@angular/core';
import {DataService, ViewService} from '../../_services/index';
import {first} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  postsObj: object[];

  constructor(
    private viewServ: ViewService,
    private router: Router
  ) { }

  ngOnInit() {
       this.viewServ.getPopular().subscribe(
         (response: object[] ) => {
        this.postsObj = response;

      },
      err => {
        console.log(err);
      }
    );



  }




}
