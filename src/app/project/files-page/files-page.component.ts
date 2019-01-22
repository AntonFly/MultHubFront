import {Component, Input, OnInit} from '@angular/core';
import {ProjectService} from '../../_services';

@Component({
  selector: 'app-files-page',
  templateUrl: './files-page.component.html',
  styleUrls: ['./files-page.component.css']
})
export class FilesPageComponent implements OnInit {

  @Input('projectData') projectData: any[];

  constructor(private projServ: ProjectService) { }

  ngOnInit() {
    console.log('IN FILES')
    console.log(this.projectData);
    // this.projServ.getProjFilesTabInfo()
  }

}
