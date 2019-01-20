import {Component, Input, OnInit} from '@angular/core';
import {ViewService} from '../../_services';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-project-pres',
  templateUrl: './project-pres.component.html',
  styleUrls: ['./project-pres.component.css']
})
export class ProjectPresComponent implements OnInit {

  @Input('postObj') postObj: any;

  projectName: string;

  constructor(
    private router1: Router,
    private router: ActivatedRoute,
    private viewServ: ViewService
  ) { }

  ngOnInit() {
    //this.viewServ.getPopular();
    //alert(this.postObj.name);
    console.log(this.postObj);
    this.projectName = this.postObj.name;

  }

  navigateToProj() {
        this.router1.navigate(['project/' + this.postObj.projectid+'/main']);
  }

}
