import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalDemo2Component } from './signal-demo2.component';

describe('SignalDemo2Component', () => {
  let component: SignalDemo2Component;
  let fixture: ComponentFixture<SignalDemo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalDemo2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalDemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
