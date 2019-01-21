import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ViewService} from '../../_services';

@Component({
  selector: 'app-project-contents',
  templateUrl: './project-contents.component.html',
  styleUrls: ['./project-contents.component.css']
})
export class ProjectContentsComponent implements OnInit {

  @Input('postObj') postObj: any[];

  projectid: string;
  isMain: boolean;
  isFiles: boolean;
  isDevs: boolean;
  curDevs: any[];
  isAbout: boolean;

  constructor(
              private router: ActivatedRoute,
              private viewServ: ViewService
              ) { }

  ngOnInit() {
    this.router.params.subscribe(value => {
      this.projectid = value.projectid;

      if(value.contents === 'main') {
        this.isMain = true;
      }
      else {
        this.isMain = false;
        if(value.contents === 'files')
          this.isFiles = true;
        else this.isFiles = false;
        if(value.contents === 'devs') {
          this.getDevelopers();
          this.isDevs = true;
        }
        else this.isDevs = false;
        if(value.contents === 'about')
          this.isAbout = true;
        else this.isAbout = false;
      }
    });
  }

  getDevelopers(){
    this.viewServ.developersPageProjectInfo(this.projectid).subscribe(
      (response: any) => {
        console.log('!!!!DEVS:!!!');
        console.log(response);
        this.curDevs = response.Devs;
      }
    );
  }

}
