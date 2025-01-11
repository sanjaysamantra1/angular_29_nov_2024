import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpcrudhttpComponent } from './empcrudhttp.component';

describe('EmpcrudhttpComponent', () => {
  let component: EmpcrudhttpComponent;
  let fixture: ComponentFixture<EmpcrudhttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpcrudhttpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpcrudhttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
