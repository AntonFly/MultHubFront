import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import {AlertService, AuthenticationService, UserService} from '../../_services';
import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private userServ: UserService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    alert(this.router.url);
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      // alert('invalid');
      return;
    }

    this.loading = true;
    this.authenticationService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          alert(data);
          if (data.login) {
            this.router.navigate(['']);//this.returnUrl]);

//          подсос projPos'ov
            this.userServ.getAllProjPos().subscribe(
              response => {
                // console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')
                // console.log(response)
                localStorage.setItem('positions', JSON.stringify(response));
              }
            );
          }
          else {
            this.alertService.error(data.msg);
            this.loading = false;
          }
        },
        (error: HttpResponse<any>) => {
          this.router.navigate(['notFound']);
          this.alertService.error('Ошибка сервера');
          // this.loading = false;
        });


  }
}

