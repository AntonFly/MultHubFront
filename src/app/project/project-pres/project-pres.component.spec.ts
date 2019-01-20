import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPresComponent } from './project-pres.component';

describe('ProjectPresComponent', () => {
  let component: ProjectPresComponent;
  let fixture: ComponentFixture<ProjectPresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectPresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectPresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
