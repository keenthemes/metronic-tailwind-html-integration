import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarChatComponent } from './topbar-chat.component';

describe('TopbarChatComponent', () => {
  let component: TopbarChatComponent;
  let fixture: ComponentFixture<TopbarChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopbarChatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopbarChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
