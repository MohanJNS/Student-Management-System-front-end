import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassNoticeComponent } from './class-notice.component';

describe('ClassNoticeComponent', () => {
  let component: ClassNoticeComponent;
  let fixture: ComponentFixture<ClassNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassNoticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
