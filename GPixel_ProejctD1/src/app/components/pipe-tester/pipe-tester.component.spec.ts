import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeTesterComponent } from './pipe-tester.component';

describe('PipeTesterComponent', () => {
  let component: PipeTesterComponent;
  let fixture: ComponentFixture<PipeTesterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipeTesterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PipeTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
