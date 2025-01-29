import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FulltimeJobsComponent } from './fulltime-jobs.component';

describe('FulltimeJobsComponent', () => {
  let component: FulltimeJobsComponent;
  let fixture: ComponentFixture<FulltimeJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FulltimeJobsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FulltimeJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
