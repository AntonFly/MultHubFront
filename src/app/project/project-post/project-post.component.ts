import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-project-post',
  templateUrl: './project-post.component.html',
  styleUrls: ['./project-post.component.css']
})
export class ProjectPostComponent implements OnInit {

  @Input('postObj') postObj: any;

  time: string;
  text: string;
  projectName: string;

  constructor() { }

  ngOnInit() {
    console.log(this.postObj);
    // this.time = this.postObj.name;
    this.time = this.postObj.time;
    this.text = this.postObj.text;
    // this.projectName = this.postObj.projectName.name;
  }

}
