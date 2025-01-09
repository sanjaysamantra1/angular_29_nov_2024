import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficSignalComponent } from './traffic-signal.component';

describe('TrafficSignalComponent', () => {
  let component: TrafficSignalComponent;
  let fixture: ComponentFixture<TrafficSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrafficSignalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrafficSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
