import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetalertDemoComponent } from './sweetalert-demo.component';

describe('SweetalertDemoComponent', () => {
  let component: SweetalertDemoComponent;
  let fixture: ComponentFixture<SweetalertDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SweetalertDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SweetalertDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
