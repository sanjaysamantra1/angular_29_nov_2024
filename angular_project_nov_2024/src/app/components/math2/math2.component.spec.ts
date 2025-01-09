import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Math2Component } from './math2.component';

describe('Math2Component', () => {
  let component: Math2Component;
  let fixture: ComponentFixture<Math2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Math2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Math2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
