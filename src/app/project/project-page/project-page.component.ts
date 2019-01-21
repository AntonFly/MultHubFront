import { Component, OnInit } from '@angular/core';
import {ProjectService, ViewService} from '../../_services';
import {ActivatedRoute, Router} from '@angular/router';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {

  projectData: any;
  projectName: string;
  subs: any[] = [];
  posts: any[];
  curPosition: string = 'typical user';
  isManager: boolean;
  isDeveloper: boolean;

  constructor(
    private view: ViewService,
    private projServ: ProjectService,
    private router2: Router,
    private router: ActivatedRoute) {
  }

  ngOnInit() {
    this.router.params.subscribe(value => this.view.getProjectMainById(value.projectid).subscribe(
      (project: any) => {
        console.log('PROJEEECT');
        console.log(project);
        this.projectData = project;
        this.subs = project.Subs;
        this.projectName = project.Project.name;
        this.posts = project.Posts;
        this.checkCurPos();
      }
    ));
  }

  checkCurPos(){
    var positions: any[] = JSON.parse(localStorage.getItem('positions'));
    console.log('BEFORE POSITIONS')
    console.log(positions);
    if(positions.length > 0) {
      console.log(this.projectData);
      for (var i = 0; i < positions.length; i++) {
        if (positions[i].projectid.projectid === this.projectData.Project.projectid)
          this.curPosition = positions[i].projpos;
      }
      if (this.curPosition == 'MANAGER') {
        this.isManager = true;
        this.isDeveloper = false;
      }
      else if (this.curPosition == 'DEVELOPER') {
        this.isManager = false;
        this.isDeveloper = true;
      }
    }
    else {
      this.curPosition = 'typical user';
      this.isManager = false;
      this.isDeveloper = false;
    }
  }

  // addPost(){
  //   alert(this.projectData.Project.projectid+"AAAAAAAAAAAAAAAAAA");
  //   this.projServ.addPost(this.projectData.Project.projectid, 'Here\'s new Post  ooofff!' ).subscribe(
  //     response => {
  //       console.log(response+'AAAAAAAAAAAA');
  //     }
  //   )
  // }

  navig(contents: string){
      this.router2.navigate(['/project/']);
  }


}
