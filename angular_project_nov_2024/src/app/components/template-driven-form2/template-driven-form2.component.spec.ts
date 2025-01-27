import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenForm2Component } from './template-driven-form2.component';

describe('TemplateDrivenForm2Component', () => {
  let component: TemplateDrivenForm2Component;
  let fixture: ComponentFixture<TemplateDrivenForm2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateDrivenForm2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateDrivenForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
