import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWithNavbarComponent } from './page-with-navbar.component';

describe('PageWithNavbarComponent', () => {
  let component: PageWithNavbarComponent;
  let fixture: ComponentFixture<PageWithNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageWithNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageWithNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
