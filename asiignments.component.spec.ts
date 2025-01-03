import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsiignmentsComponent } from './asiignments.component';

describe('AsiignmentsComponent', () => {
  let component: AsiignmentsComponent;
  let fixture: ComponentFixture<AsiignmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsiignmentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsiignmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
