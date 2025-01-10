import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpDemo1Component } from './http-demo1.component';

describe('HttpDemo1Component', () => {
  let component: HttpDemo1Component;
  let fixture: ComponentFixture<HttpDemo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpDemo1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
