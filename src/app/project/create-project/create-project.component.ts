import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertService, AuthenticationService, ProjectService} from '../../_services';
import {first} from 'rxjs/operators';
import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {
  forma: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private project: ProjectService,
    private alertService: AlertService) {}

  ngOnInit() {
    this.forma = this.formBuilder.group({
      name: ['', Validators.required],
      desc: ['', Validators.required],
      goal: ['', Validators.required]
    });
  }
  get f() { return this.forma.controls; }
  onSubmit1(){
    alert(this.router.url);
    this.submitted = true;

    // stop here if form is invalid
    if (this.forma.invalid) {
      // alert('invalid');
      return;
    }

    this.loading = true;
    this.project.createProject( this.f.name.value, this.f.desc.value, this.f.goal.value, JSON.parse(localStorage.getItem('currentUser')).login)
      .pipe(first())
      .subscribe(
        (data: any) => {
          alert(data);
          if(data)
            this.router.navigate(['']);//this.returnUrl]);
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
