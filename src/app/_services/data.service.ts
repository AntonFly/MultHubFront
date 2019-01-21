import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {User} from '../_models';


@Injectable()
export class DataService {

// связывает поиск в баре с компонентом SearchComponent
  private lol: object[];
  private searchSource = new BehaviorSubject(undefined);
  currentSearch = this.searchSource.asObservable();

// уведомление о новом сообщении
  private notificationSource = new BehaviorSubject(false);
  currentNotific = this.notificationSource.asObservable();

  toggleNotific(){
    this.notificationSource.next( !this.currentNotific );
  }

  setSearch(data: object[]) {
    this.lol = data;
    this.searchSource.next(this.lol);
  }

}
