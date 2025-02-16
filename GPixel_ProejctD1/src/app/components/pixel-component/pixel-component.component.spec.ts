import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PixelComponentComponent } from './pixel-component.component';

describe('PixelComponentComponent', () => {
  let component: PixelComponentComponent;
  let fixture: ComponentFixture<PixelComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PixelComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PixelComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
