import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SonComponent } from './son.component';

describe('SonComponent', () => {
  let component: SonComponent;
  let fixture: ComponentFixture<SonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
