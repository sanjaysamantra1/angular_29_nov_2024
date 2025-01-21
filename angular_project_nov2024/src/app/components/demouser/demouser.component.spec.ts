import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemouserComponent } from './demouser.component';

describe('DemouserComponent', () => {
  let component: DemouserComponent;
  let fixture: ComponentFixture<DemouserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemouserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemouserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
