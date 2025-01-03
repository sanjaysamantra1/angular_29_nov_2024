import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Empchild1Component } from './empchild1.component';

describe('Empchild1Component', () => {
  let component: Empchild1Component;
  let fixture: ComponentFixture<Empchild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Empchild1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Empchild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
