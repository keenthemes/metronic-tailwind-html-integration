import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarNotificationDropdownComponent } from './topbar-notification-dropdown.component';

describe('TopbarNotificationDropdownComponent', () => {
  let component: TopbarNotificationDropdownComponent;
  let fixture: ComponentFixture<TopbarNotificationDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopbarNotificationDropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopbarNotificationDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
