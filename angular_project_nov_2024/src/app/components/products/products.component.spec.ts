import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsComponent } from './products.component';
import { FormsModule } from '@angular/forms';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, ProductsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should search products', () => {
    component.products = [
      { id: 1, title: 'Test 1', price: 10, description: '', image: '', category: '' },
      { id: 2, title: 'Test 2', price: 20, description: '', image: '', category: '' }
    ];
    component.searchTerm = 'Test 1';
    component.search();
    expect(component.filteredProducts.length).toBe(1);
  });

  it('should sort products', () => {
    component.filteredProducts = [
      { id: 1, title: 'Test 1', price: 20, description: '', image: '', category: '' },
      { id: 2, title: 'Test 2', price: 10, description: '', image: '', category: '' }
    ];
    component.sortProducts('asc');
    expect(component.filteredProducts[0].price).toBe(10);
  });

  it('should handle pagination', () => {
    component.filteredProducts = Array(10).fill({
      id: 1, title: 'Test', price: 10, description: '', image: '', category: ''
    });
    component.itemsPerPage = 6;
    component.updatePagination();
    expect(component.totalPages).toBe(2);
  });
});