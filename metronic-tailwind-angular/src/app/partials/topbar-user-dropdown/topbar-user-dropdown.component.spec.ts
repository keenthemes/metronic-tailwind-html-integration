import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarUserDropdownComponent } from './topbar-user-dropdown.component';

describe('TopbarUserDropdownComponent', () => {
  let component: TopbarUserDropdownComponent;
  let fixture: ComponentFixture<TopbarUserDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopbarUserDropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopbarUserDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
