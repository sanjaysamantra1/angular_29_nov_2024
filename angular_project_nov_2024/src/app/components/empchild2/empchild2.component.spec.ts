import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Empchild2Component } from './empchild2.component';

describe('Empchild2Component', () => {
  let component: Empchild2Component;
  let fixture: ComponentFixture<Empchild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Empchild2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Empchild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
