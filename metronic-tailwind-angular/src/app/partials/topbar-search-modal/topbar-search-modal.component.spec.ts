import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarSearchModalComponent } from './topbar-search-modal.component';

describe('TopbarSearchModalComponent', () => {
  let component: TopbarSearchModalComponent;
  let fixture: ComponentFixture<TopbarSearchModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopbarSearchModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopbarSearchModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
