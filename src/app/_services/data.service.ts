import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {User} from '../_models';


@Injectable()
export class DataService {

  private usersource = new BehaviorSubject( undefined);
  currentUser = this.usersource.asObservable();

  private lol: object[];
  private searchSource = new BehaviorSubject(undefined);
  currentSearch = this.searchSource.asObservable();


  setSearch(data: object[]) {
    this.lol = data;
    this.searchSource.next(this.lol);
  }

  setUser(user: User){
    this.usersource.next(user);
  }
  deleteUser(){
    this.usersource.next(undefined);
  }
}
