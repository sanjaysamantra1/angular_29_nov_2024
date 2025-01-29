import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenForm3Component } from './template-driven-form3.component';

describe('TemplateDrivenForm3Component', () => {
  let component: TemplateDrivenForm3Component;
  let fixture: ComponentFixture<TemplateDrivenForm3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateDrivenForm3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateDrivenForm3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
