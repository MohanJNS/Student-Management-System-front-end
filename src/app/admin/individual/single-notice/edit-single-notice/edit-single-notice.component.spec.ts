import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSingleNoticeComponent } from './edit-single-notice.component';

describe('EditSingleNoticeComponent', () => {
  let component: EditSingleNoticeComponent;
  let fixture: ComponentFixture<EditSingleNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSingleNoticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSingleNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
