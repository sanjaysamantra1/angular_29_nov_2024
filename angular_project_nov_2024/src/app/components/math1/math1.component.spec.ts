import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Math1Component } from './math1.component';

describe('Math1Component', () => {
  let component: Math1Component;
  let fixture: ComponentFixture<Math1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Math1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Math1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
