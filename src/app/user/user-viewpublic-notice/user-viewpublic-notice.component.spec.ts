import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewpublicNoticeComponent } from './user-viewpublic-notice.component';

describe('UserViewpublicNoticeComponent', () => {
  let component: UserViewpublicNoticeComponent;
  let fixture: ComponentFixture<UserViewpublicNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewpublicNoticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserViewpublicNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
