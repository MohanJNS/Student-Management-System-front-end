import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNoticeDialogComponent } from './edit-notice-dialog.component';

describe('EditNoticeDialogComponent', () => {
  let component: EditNoticeDialogComponent;
  let fixture: ComponentFixture<EditNoticeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditNoticeDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditNoticeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
