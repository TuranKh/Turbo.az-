import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeAnnouncementComponent } from './change-announcement.component';

describe('ChangeAnnouncementComponent', () => {
  let component: ChangeAnnouncementComponent;
  let fixture: ComponentFixture<ChangeAnnouncementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeAnnouncementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
