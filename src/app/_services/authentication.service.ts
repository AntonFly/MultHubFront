import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { map } from 'rxjs/operators';
import {DataService} from './data.service';
import {User} from '../_models';

@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient, private data: DataService) { }

  login(username: string, password: string) {

    let headers = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'});
    let options = { headers: headers };

    var body = 'login=' + username + '&password=' + password;

    return this.http.post<any>(`http://localhost:8080/MultHubnew_war_exploded/resources/user/signIn`, body/*{ username: username, password: password }*/, options)
      .pipe(map(user => {
        console.log(user);
        if (user && user.login) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('positions');
  }
}
