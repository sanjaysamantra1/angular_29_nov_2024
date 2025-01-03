import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TCardsComponent } from './t-cards.component';

describe('TCardsComponent', () => {
  let component: TCardsComponent;
  let fixture: ComponentFixture<TCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
