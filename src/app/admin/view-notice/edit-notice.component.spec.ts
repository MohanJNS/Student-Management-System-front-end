import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNoticeComponent } from './edit-notice.component';

describe('EditNoticeComponent', () => {
  let component: EditNoticeComponent;
  let fixture: ComponentFixture<EditNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditNoticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
