import { Component, OnInit } from '@angular/core';
import {ViewService} from '../../_services';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-dialogs-page',
  templateUrl: './dialogs-page.component.html',
  styleUrls: ['./dialogs-page.component.css']
})
export class DialogsPageComponent implements OnInit {

  dialogs: any[];
  isDialogs: boolean = true;
  isMessages: boolean = false;
  curDialogId:string = undefined;
  curSobesednik: any;

  constructor(private router: ActivatedRoute,
              private viewServ: ViewService) { }

  ngOnInit() {
    this.router.params.subscribe(value => {
      if(value.dialogid === undefined) {
        this.isDialogs = true;
        this.isMessages = false;
      }
      else {
        this.curDialogId = value.dialogid;
        this.isDialogs = false;
        this.isMessages = true;
      }
    });

    this.viewServ.getDialogs().subscribe(
      (response: any[]) => {
        this.dialogs = response;
        console.log('!!!dialogs');
        console.log(this.dialogs[0]);

        for(var i = 0; i < this.dialogs.length;i++)
        {
          if (this.curDialogId === (this.dialogs[i])[0].id){
            // alert('in')
            this.curSobesednik = (this.dialogs[i])[1];
          }
        }

      }
    );
  }
}
