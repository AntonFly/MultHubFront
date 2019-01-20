import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { User } from '../_models/index';
import {map} from 'rxjs/operators';

@Injectable()
export class ViewService {
  constructor(private http: HttpClient) {}

  getProfileById(id) {
    return this.http.get('http://localhost:8080/MultHubnew_war_exploded/resources/view/userPageInfo' + id)
      .pipe(map( response => {
          if (response) {
            console.log(response);
            return response;
          }
        }
      ));
  }
  getProjectMainById(id) {
    return this.http.get('http://localhost:8080/MultHubnew_war_exploded/resources/view/projInfo' + id)
      .pipe(map( response => {
          if (response) {
            console.log(response);
            return response;
          }
        }
      ));
  }

  getDialogs(){
    return this.http.get('http://localhost:8080/MultHubnew_war_exploded/resources/view/dialogs' + JSON.parse(localStorage.getItem('currentUser')).login)
      .pipe(map( response => {
          if (response) {
            return response;
          }
        }
      ));
  }

  getPopular() {
    return this.http.get('http://localhost:8080/MultHubnew_war_exploded/resources/view/popular100')
      .pipe(map( response => {
          if (response) {
            console.log(response);
            return response;
          }
          return response;
        }
      ));
  }

  getSearch(projectName) {
    return this.http.get('http://localhost:8080/MultHubnew_war_exploded/resources/view/search' + projectName)
      .pipe(map( response => {
            if (response) {
              console.log(response);
              return response;
            }
        }
      ));
  }

  getNews() {
    return this.http.get('http://localhost:8080/MultHubnew_war_exploded/resources/view/news' + JSON.parse(localStorage.getItem('currentUser')).login)
      .pipe(map( (response: any[] ) => {
          if (response) {
            console.log(response);
            return response;
          }
        }
      ));
  }

}
