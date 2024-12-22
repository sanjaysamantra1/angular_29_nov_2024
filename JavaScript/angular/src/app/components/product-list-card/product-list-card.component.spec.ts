import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListCardComponent } from './product-list-card.component';

describe('ProductListCardComponent', () => {
  let component: ProductListCardComponent;
  let fixture: ComponentFixture<ProductListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductListCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
