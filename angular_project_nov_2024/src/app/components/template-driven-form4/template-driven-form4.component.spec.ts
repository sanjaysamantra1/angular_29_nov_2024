import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenForm4Component } from './template-driven-form4.component';

describe('TemplateDrivenForm4Component', () => {
  let component: TemplateDrivenForm4Component;
  let fixture: ComponentFixture<TemplateDrivenForm4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateDrivenForm4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateDrivenForm4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
