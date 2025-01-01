import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabindingassignComponent } from './databindingassign.component';

describe('DatabindingassignComponent', () => {
  let component: DatabindingassignComponent;
  let fixture: ComponentFixture<DatabindingassignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatabindingassignComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatabindingassignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
