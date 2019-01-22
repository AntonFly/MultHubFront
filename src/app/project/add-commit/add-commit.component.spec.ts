import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCommitComponent } from './add-commit.component';

describe('AddCommitComponent', () => {
  let component: AddCommitComponent;
  let fixture: ComponentFixture<AddCommitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCommitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCommitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
