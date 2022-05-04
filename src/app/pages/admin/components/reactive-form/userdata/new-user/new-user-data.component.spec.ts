import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserDataComponent } from './new-user-data.component';

describe('NewUserDataComponent', () => {
  let component: NewUserDataComponent;
  let fixture: ComponentFixture<NewUserDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewUserDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUserDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
