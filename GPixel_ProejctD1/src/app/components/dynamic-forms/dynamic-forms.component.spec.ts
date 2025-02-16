import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormsComponent } from './dynamic-forms.component';

describe('DynamicFormsComponent', () => {
  let component: DynamicFormsComponent;
  let fixture: ComponentFixture<DynamicFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicFormsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DynamicFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
