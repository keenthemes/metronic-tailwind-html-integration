import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo5Component } from './demo5.component';

describe('Demo5Component', () => {
  let component: Demo5Component;
  let fixture: ComponentFixture<Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Demo5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
