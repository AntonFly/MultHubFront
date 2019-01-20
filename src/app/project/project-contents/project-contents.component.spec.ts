import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectContentsComponent } from './project-contents.component';

describe('ProjectContentsComponent', () => {
  let component: ProjectContentsComponent;
  let fixture: ComponentFixture<ProjectContentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectContentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
