import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment2Component } from './assignment2.component';

describe('Assignment2Component', () => {
  let component: Assignment2Component;
  let fixture: ComponentFixture<Assignment2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Assignment2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assignment2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
