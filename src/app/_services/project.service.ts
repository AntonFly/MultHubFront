import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { User } from '../_models/index';
import {map} from 'rxjs/operators';

@Injectable()
export class ProjectService {
  constructor(private http: HttpClient) {}

  getById(id) {
    return this.http.get('http://localhost:8080/MultHubnew_war_exploded/resources/view/userPageInfo' + id)
      .pipe(map( response => {
          if (response) {
            console.log(response);
            return response;
          }
        }
      ));
  }

  createProject(name,desc,goal,login){
    let headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'});
    let options = { headers: headers };
    var body = "name=" + name + "&description=" + desc + "&login=" + login+ "&goalBudget="+goal;
    alert(body);

    return this.http.post(`http://localhost:8080/MultHubnew_war_exploded/resources/project/create`,  body, options);
  }

  addPost(file: File, projectId, text){
    const fd = new FormData();
    var ext ='noFile';

    if(file) {
      var fileUrl = file.name;
      var parts;
      ext = (parts = fileUrl.split("/").pop().split(".")).length > 1 ? parts.pop() : "";

      fd.append('file', file);
    }

    return this.http.post('http://localhost:8080/MultHubnew_war_exploded/resources/project/toPost'+projectId+'&'+ext+'&'+text,  fd);
  }

  getProjFilesTabInfo(projId){
    return this.http.get('http://localhost:8080/MultHubnew_war_exploded/resources/view/projFiles' + projId)
      .pipe(map( response => {
          if (response) {
            console.log(response);
            return response;
          }
        }
      ));
  }
  commitFiles(files: File[], projectid, login){
    const fd = new FormData();
    for(var i = 0; i < files.length; i++){
      fd.append(files[i].name, files[i]);
    }
    return this.http.post('http://localhost:8080/MultHubnew_war_exploded/resources/project/addFiles'+login+'&'+projectid,  fd)
      .pipe(map( response => {
          if (response) {
            console.log(response);
            return response;
          }
        }
      ));
  }
  getProjectFiles(projectId){
    return this.http.get('http://localhost:8080/MultHubnew_war_exploded/resources/project/getProjectFiles' + projectId)
      .pipe(map( response => {
          if (response) {
            console.log(response);
            return response;
          }
        }
      ));
  }

  getFileCommits(filename, projectid){
    return this.http.get('http://localhost:8080/MultHubnew_war_exploded/resources/project/getFileCommits' + filename+'&'+projectid)
      .pipe(map( response => {
          if (response) {
            console.log('AAAAAAAAAAAAA')
            console.log(response);
            return response;
          }
        }
      ));
  }


}
