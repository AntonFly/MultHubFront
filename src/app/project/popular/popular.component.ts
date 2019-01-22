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
           // console.log(response);
        this.postsObj = response;
           // this.postsObj = response.sort((n1,n2) => {  сортировка
           //   if (n1 > n2) {
           //     return 1;
           //   }
           //
           //   if (n1 < n2) {
           //     return -1;
           //   }
           //
           //   return 0;
           // });

      },
      err => {
        console.log(err);
      }
    );



  }




}
