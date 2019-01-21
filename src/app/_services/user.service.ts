import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { User } from '../_models/index';
import {map} from 'rxjs/operators';
import {FnParam} from '@angular/compiler/src/output/output_ast';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>(`/users`);
  }

/////////////////////////////////////// надо сделать ебать!
  checkIfExists(id) {
    return this.http.get('http://localhost:8080/MultHubnew_war_exploded/resources/view/try' + id)
      .pipe(map( response => {
        if (response) {
            console.log(response);
            return response;
          }
        }
      ));
  }

  register(user: User) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'});
    let options = { headers: headers };
    var body = "name=" + user.name + "&surname=" + user.surName + "&login=" + user.login + "&password=" + user.password;


    return this.http.post(`http://localhost:8080/MultHubnew_war_exploded/resources/user/signUp`,  body, options);
  }

  update(user: User) {
    return this.http.put(`/users/` , user);
  }

  delete(id: number) {
    return this.http.delete(`/users/` );
  }

  sendPhoto(file: File) {
    const fd = new FormData();
    fd.append('file', file);

    return this.http.post('http://localhost:8080/MultHubnew_war_exploded/resources/user/uploadAvatar'+JSON.parse(localStorage.getItem('currentUser')).login, fd)
      .pipe(map( response => {
          if (response) {
            console.log(response);
            return response;
          }
        }
      ));

  }
  getAvatar(login){
    return this.http.get('http://localhost:8080/MultHubnew_war_exploded/resources/user/getAvatar' + login)
      .pipe(map( response => {
          if (response) {
            console.log(response);
            return response;
          }
        }
      ));
  }

  sendMessage(login,toLogin,msg,dialog){
    let headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'});
    let options = { headers: headers };
    var body = "login="+login  + "&toLogin="+ toLogin + "&message=" + msg + "&dialog="+dialog;
    return this.http.post('http://localhost:8080/MultHubnew_war_exploded/resources/user/sendMessage',body,options)
      .pipe(map( response => {
          if (response) {
            console.log(response);
            return response;
          }
        }
      ));
  }

  getAllProjPos() {
    return this.http.get('http://localhost:8080/MultHubnew_war_exploded/resources/user/allManaged' + JSON.parse(localStorage.getItem('currentUser')).login)
      .pipe(map( response => {
          if (response) {
            console.log(response);
            return response;
          }
        }
      ));


  }

}
