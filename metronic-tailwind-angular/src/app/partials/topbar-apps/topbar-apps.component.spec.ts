import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarAppsComponent } from './topbar-apps.component';

describe('TopbarAppsComponent', () => {
  let component: TopbarAppsComponent;
  let fixture: ComponentFixture<TopbarAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopbarAppsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopbarAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
