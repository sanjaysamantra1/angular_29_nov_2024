import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationCardsComponent } from './pagination-cards.component';

describe('PaginationCardsComponent', () => {
  let component: PaginationCardsComponent;
  let fixture: ComponentFixture<PaginationCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
