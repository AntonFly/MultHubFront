import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService, UserService } from '../../_services';
import {HttpResponse} from '@angular/common/http';

@Component({
  templateUrl: 'register.component.html',
  styleUrls: ['./register.component.css']
  })
// проверка логина и почты на существуование

export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  error: String = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      surName: ['', Validators.required],
      login: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    this.userService.register(this.registerForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/login']);
        },
        error => {
          alert('error');
          this.router.navigate(['/error']);
          this.loading = false;
        });
  }

  checkUsers(input: any) {
// alert(input.target.value);
    if (input.target.value) {
      this.userService.checkIfExists(input.target.value)
        .pipe(first())
        .subscribe(
          (data: any) => {
            if (data.msg === 'false')
              this.error = 'Такой логин занят';
            else this.error = '';
          }
        );
    } else this.error = '';
  }

  setErrorTimeout(msg) {
    this.error = msg;
    let timer = setTimeout(() => {
      this.error = '';
      clearTimeout(timer);
    }, 2000);
  }

}
