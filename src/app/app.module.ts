import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {HttpClient, HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// my components
import { AppComponent } from './app.component';
import { BarComponent } from './common/bar/bar.component';
import { PopularComponent } from './project/popular/popular.component';
import { AboutComponent } from './common/about/about.component';
import { NewsComponent } from './user/news/news.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ProfileComponent } from './user/profile/profile.component';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { SearchComponent } from './common/search/search.component';
import { ProjectPageComponent } from './project/project-page/project-page.component';
import {AlertComponent} from './_directives';
import { CreateProjectComponent } from './project/create-project/create-project.component';
import { ProjectPresComponent } from './project/project-pres/project-pres.component';

// guards
import {AuthGuard} from './_guards';

// services
import {AlertService, AuthenticationService, DataService, UserService, ProjectService, ViewService} from './_services';
// primeng
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {ToggleButtonModule} from 'primeng/togglebutton';
// helpers
import { ErrorInterceptor, fakeBackendProvider, JwtInterceptor} from './_helpers';

// directives
import {PostObjDirective} from './_directives';
import { ProjectPostComponent } from './project/project-post/project-post.component';
import { ProjectContentsComponent } from './project/project-contents/project-contents.component';
import { SettingsComponent } from './common/settings/settings.component';



const appRoutes: Routes = [
  {path : '' , component: PopularComponent},
  {path: 'about', component: AboutComponent},
  {path : 'profile/:login' , component: ProfileComponent, canActivate: [AuthGuard] },
  // {path: 'project/:projectid', redirectTo: 'project/:projectid/main'},
  {path: 'project/:projectid/:contents', component: ProjectPageComponent},
  {path: 'news', component: NewsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'newProject', component: CreateProjectComponent},
  {path: 'search', component: SearchComponent},
  {path: 'settings', component: SettingsComponent},
  {path : '**' , component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BarComponent,
    AlertComponent,
    PopularComponent,
    AboutComponent,
    NewsComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    NotFoundComponent,
    CreateProjectComponent,
    PostObjDirective,
    SearchComponent,
    ProjectPageComponent,
    ProjectPresComponent,
    ProjectPostComponent,
    ProjectContentsComponent,
    SettingsComponent,
  ],
  imports: [
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    OverlayPanelModule,
    ToggleButtonModule
  ],
  providers: [
              AlertService,
              AuthenticationService,
              DataService,
              AuthGuard,
              UserService,
              ProjectService,
              ViewService,
    // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    // provider used to create fake backend
    // fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
