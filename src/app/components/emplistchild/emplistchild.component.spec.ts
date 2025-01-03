import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplistchildComponent } from './emplistchild.component';

describe('EmplistchildComponent', () => {
  let component: EmplistchildComponent;
  let fixture: ComponentFixture<EmplistchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmplistchildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmplistchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
