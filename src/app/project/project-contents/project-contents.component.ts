import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectService, ViewService} from '../../_services';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-project-contents',
  templateUrl: './project-contents.component.html',
  styleUrls: ['./project-contents.component.css']
})
export class ProjectContentsComponent implements OnInit {

  @Input('postObj') postObj: any[];
  @Input('projectData') projectData: any[];
  @Input('isManager') isManager: boolean;
  postForm: FormGroup;
  file: File;
  projectid: string;
  isMain: boolean;
  isFiles: boolean;
  isDevs: boolean;
  curDevs: any[];
  isAbout: boolean;

  constructor(
              private formBuilder: FormBuilder,
              private projServ: ProjectService,
              private router: ActivatedRoute,
              private viewServ: ViewService
              ) { }
  get f() { return this.postForm.controls; }
  ngOnInit() {
    this.postForm = this.formBuilder.group(
      {
        text: ['', Validators.required],
        file: ['', Validators.required]
      }
    );

    this.router.params.subscribe(value => {  //какая вкладочка выбрана
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

    // this.projServ.

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
// ~~~~~~~~~~~~~ add post ~~~~~~~~~~~~~//
  onFileChange(event) {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
    }
  }

  addPost(){
    alert(this.f.file.value as File)
    this.projServ.addPost(this.file, this.projectid, this.f.text.value ).subscribe(
      response => {
        console.log(response+'AAAAAAAAAAAA');
      }
    )
  }
  // ~~~~~~~~~~~~~         ~~~~~~~~~~~~~//

}
