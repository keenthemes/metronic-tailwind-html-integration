import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo9Component } from './demo9.component';

describe('Demo9Component', () => {
  let component: Demo9Component;
  let fixture: ComponentFixture<Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Demo9Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
