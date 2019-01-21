import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPointerComponent } from './user-pointer.component';

describe('UserPointerComponent', () => {
  let component: UserPointerComponent;
  let fixture: ComponentFixture<UserPointerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPointerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPointerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
