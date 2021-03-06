import { Component, OnInit } from '@angular/core';
import {ViewService} from '../../_services';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private viewServ: ViewService) { }
  get: any[];
  projects: any[] = [];
  posts: any[] = [];
  ngOnInit() {
    this.viewServ.getNews().subscribe(
      (response: any[] ) => {
        this.get = response;
        for(var i = 0; i < response.length; i++) {
          this.projects.push( (response[i])[response[i].length - 1]);
          for(var j = 0; j < response[i].length - 1; j++) {
            (response[i])[j].projectName = (response[i])[response[i].length - 1];
            this.posts.push((response[i])[j]);
          }
        }

      },
      err => {
        console.log(err);
      }
    );
  }

}
