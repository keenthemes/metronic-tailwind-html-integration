import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptsComponent } from './scripts.component';

describe('ScriptsComponent', () => {
  let component: ScriptsComponent;
  let fixture: ComponentFixture<ScriptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScriptsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScriptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
