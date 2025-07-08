import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationDrawerComponent } from './notification-drawer.component';

describe('NotificationDrawerComponent', () => {
  let component: NotificationDrawerComponent;
  let fixture: ComponentFixture<NotificationDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationDrawerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
