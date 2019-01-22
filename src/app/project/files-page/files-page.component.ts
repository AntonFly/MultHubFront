import {Component, Input, OnInit} from '@angular/core';
import {ProjectService} from '../../_services';

@Component({
  selector: 'app-files-page',
  templateUrl: './files-page.component.html',
  styleUrls: ['./files-page.component.css']
})
export class FilesPageComponent implements OnInit {

  @Input('projectData') projectData: any;

  uniqueFiles: any[]
  isFiles: boolean;

  constructor(private projServ: ProjectService) { }

  ngOnInit() {
    this.isFiles = true;
    this.projServ.getProjectFiles(this.projectData.Project.projectid).subscribe(
      (response: any[]) => {
        this.uniqueFiles = response;
          console.log(response);
          // alert(response[0].filename.split('_').pop());
      }
    )
    console.log('IN FILES')
    console.log(this.projectData);
    // this.projServ.getProjFilesTabInfo()
  }

  changeTofile(){
    // this.
  }

  getUnderlinePath(path: string){
    var splitted = path.split('_');
    if( splitted.length > 2){
      var tmp1 = '';
      for(var i = 1; i< splitted.length; i++) {
        tmp1 = tmp1.concat(splitted[i]);
        if(i != splitted.length-1)
        tmp1 = tmp1.concat('_');
      }
      return tmp1;
    }
    else{return splitted.pop()}
  }

}
