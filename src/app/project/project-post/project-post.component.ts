import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-project-post',
  templateUrl: './project-post.component.html',
  styleUrls: ['./project-post.component.css']
})
export class ProjectPostComponent implements OnInit {

  @Input('postObj') postObj: any;
  // @ViewChild('text') text: ElementRef;

  time: string;
  text: string;
  projectName: string;

  constructor() {
  }

  ngOnInit() {
    console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA!')
    console.log(this.postObj);
    // this.time = this.postObj.name;
    this.time = this.postObj.time;
    this.text = this.postObj.text;
    // this.text.nativeElement.innerHtml = this.postObj.text;
    // this.projectName = this.postObj.projectName.name;
  }

  checkIfImgExtention(filepath) {

    var ext = 'noFile';
    var fileUrl = filepath;
    var parts;
    ext = (parts = fileUrl.split("/").pop().split(".")).length > 1 ? parts.pop() : "";

    if (ext === 'png' || ext === 'jpg' || ext === 'bmp')
      return true;
    else return false;
  }
  getExt(filepath) {

    var ext = 'noFile';
    var fileUrl = filepath;
    var parts;
    ext = (parts = fileUrl.split("/").pop().split(".")).length > 1 ? parts.pop() : "";

    return ext;
  }
}
