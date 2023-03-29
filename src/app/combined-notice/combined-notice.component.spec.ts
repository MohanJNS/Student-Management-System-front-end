import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinedNoticeComponent } from './combined-notice.component';

describe('CombinedNoticeComponent', () => {
  let component: CombinedNoticeComponent;
  let fixture: ComponentFixture<CombinedNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombinedNoticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombinedNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
