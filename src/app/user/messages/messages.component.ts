import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {DataService, UserService, ViewService} from '../../_services';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {element} from 'protractor';
import {ScrollPanel} from 'primeng/primeng';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  @Input('postObj') postObj: any[];
  currentDialog: any[];
  messForm: FormGroup;
  newMsg: string;
  dialogId: string;
  messages: any[];
  @Input('userSobisednik') userSobisednik: any;

  constructor(private dataServ: DataService,
              private formBuilder: FormBuilder,
              private router: ActivatedRoute,
              private viewServ: ViewService,
              private userServ: UserService) { }
  get f() { return this.messForm.controls; }
  ngOnInit() {
    console.log('in messages');
    console.log(this.userSobisednik)
    this.messForm = this.formBuilder.group(
      {msg: ['', Validators.required]}
    );

    this.router.params.subscribe(value => this.dialogId = value.dialogid);

    this.dataServ.currentNotific.subscribe( data => {
      this.getMessages();
    });
    this.getMessages();



    // /    // document.getElementById('scroll').scroll(divHeight, 0) ;
    // document.getElementById('scroll').moveBar();
  }

  sendNewMsg() {
    // alert(JSON.parse(localStorage.getItem('currentUser')).login+' '+this.userSobisednik.login+' '+ this.f.msg.value+' '+ this.dialogId)
    this.userServ.sendMessage(JSON.parse(localStorage.getItem('currentUser')).login, this.userSobisednik.login, this.f.msg.value, this.dialogId).subscribe(
      response =>{
        if(response)
          this.getMessages();
      },
      error => {
        alert('error');
      }
    )
  }

  getMessages(){
    this.viewServ.getMessages(this.dialogId).subscribe(
      (response: any[]) => {
        console.log('messages');
        console.log(response);
        this.messages = response;
        let div  = document.getElementById('outerDiv')  ;
        let  divHeight = document.getElementById('outerDiv').scrollHeight;
        div.scroll(0, divHeight);
        // div.refresh();
        // alert(divHeight);
      }
    )
  }
  checkCondOfMess(message){
    return message.sender === JSON.parse(localStorage.getItem('currentUser')).login;
  }
  getCurUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  // goBottom() {
  //   let  divHeight = document.getElementById('scroll').scroll(0,div.scrolHeight);
  //   alert(divHeight);
  // }
}
