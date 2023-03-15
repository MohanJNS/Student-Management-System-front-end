import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeformComponent } from './noticeform.component';

describe('NoticeformComponent', () => {
  let component: NoticeformComponent;
  let fixture: ComponentFixture<NoticeformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticeformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticeformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
