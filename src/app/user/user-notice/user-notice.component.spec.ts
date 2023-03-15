import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNoticeComponent } from './user-notice.component';

describe('UserNoticeComponent', () => {
  let component: UserNoticeComponent;
  let fixture: ComponentFixture<UserNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserNoticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
