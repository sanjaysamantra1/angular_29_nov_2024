import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsAssignmentComponent } from './products-assignment.component';

describe('ProductsAssignmentComponent', () => {
  let component: ProductsAssignmentComponent;
  let fixture: ComponentFixture<ProductsAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsAssignmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
