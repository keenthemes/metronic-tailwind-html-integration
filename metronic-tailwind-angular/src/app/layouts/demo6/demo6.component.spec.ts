import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo6Component } from './demo6.component';

describe('Demo6Component', () => {
  let component: Demo6Component;
  let fixture: ComponentFixture<Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Demo6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
