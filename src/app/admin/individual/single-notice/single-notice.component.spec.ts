import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleNoticeComponent } from './single-notice.component';

describe('SingleNoticeComponent', () => {
  let component: SingleNoticeComponent;
  let fixture: ComponentFixture<SingleNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleNoticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
