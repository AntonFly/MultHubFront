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

  addPost(projectId,text){
    let headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'});
    let options = { headers: headers };
    var body = "projectId=" + projectId + "&text=" + text ;

    return this.http.post(`http://localhost:8080/MultHubnew_war_exploded/resources/project/toPost`,  body, options);
  }

}
