import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalDemo1Component } from './signal-demo1.component';

describe('SignalDemo1Component', () => {
  let component: SignalDemo1Component;
  let fixture: ComponentFixture<SignalDemo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalDemo1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
