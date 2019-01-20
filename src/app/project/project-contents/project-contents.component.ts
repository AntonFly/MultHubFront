import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-project-contents',
  templateUrl: './project-contents.component.html',
  styleUrls: ['./project-contents.component.css']
})
export class ProjectContentsComponent implements OnInit {

  curUrl: string;

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(value => {
      this.curUrl = value.contents;
      }
    );
  }

}
