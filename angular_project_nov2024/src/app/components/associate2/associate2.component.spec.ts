import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Associate2Component } from './associate2.component';

describe('Associate2Component', () => {
  let component: Associate2Component;
  let fixture: ComponentFixture<Associate2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Associate2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Associate2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
