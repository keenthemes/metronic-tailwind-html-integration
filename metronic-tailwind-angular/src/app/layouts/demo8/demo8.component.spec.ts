import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo8Component } from './demo8.component';

describe('Demo8Component', () => {
  let component: Demo8Component;
  let fixture: ComponentFixture<Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Demo8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
