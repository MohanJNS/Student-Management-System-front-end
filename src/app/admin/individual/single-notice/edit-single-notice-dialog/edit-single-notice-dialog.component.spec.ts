import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSingleNoticeDialogComponent } from './edit-single-notice-dialog.component';

describe('EditSingleNoticeDialogComponent', () => {
  let component: EditSingleNoticeDialogComponent;
  let fixture: ComponentFixture<EditSingleNoticeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSingleNoticeDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSingleNoticeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
