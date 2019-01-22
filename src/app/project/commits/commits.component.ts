import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProjectService} from '../../_services';

@Component({
  selector: 'app-commits',
  templateUrl: './commits.component.html',
  styleUrls: ['./commits.component.css']
})
export class CommitsComponent implements OnInit {

  @Input('projectData') projectData: any[];
  @Input('filename') filename: string;

  commtis: any[];
  zeroCommitRelPath: string;

  constructor(private projServ: ProjectService,
              private router2: Router,
              private router: ActivatedRoute) { }

  ngOnInit() {
    // alert('commits'+ this.filename)
    console.log(this.projectData)
    this.projServ.getFileCommits(this.filename, this.projectData.Project.projectid).subscribe(
      (response: any[]) => {
        this.commtis = response;
        this.zeroCommitRelPath = this.pathForCommitImage(this.commtis[0].filepath);
        // alert('NORM')
      }
    );

    //if(this.commtis)


  }

  pathForCommitImage(absPath){
    var splitted = absPath.split('/');
    var tmp ='';
    for(var i = 4; i < splitted.length; i++){
      tmp = tmp.concat(splitted[i]);
      if(i != splitted.length-1)
        tmp = tmp.concat('\\/');
    }
    // alert(tmp+ 'tmp')
    return tmp;

  }

}
