import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DataService, ViewService} from '../../_services';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
// дополнить поиск по людям
export class SearchComponent implements OnInit {

  postsObj: object[];

  constructor(
    private dataServ: DataService,
    private viewServ: ViewService,
    private router: Router
  ) { }

  ngOnInit() {
    // this.postsObj = this.dataServ.currentSearch;
    this.dataServ.currentSearch.subscribe( data => {this.postsObj = data;});

  }

}
