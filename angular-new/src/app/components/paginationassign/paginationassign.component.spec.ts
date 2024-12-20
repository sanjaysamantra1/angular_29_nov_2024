import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationassignComponent } from './paginationassign.component';

describe('PaginationassignComponent', () => {
  let component: PaginationassignComponent;
  let fixture: ComponentFixture<PaginationassignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationassignComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationassignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
