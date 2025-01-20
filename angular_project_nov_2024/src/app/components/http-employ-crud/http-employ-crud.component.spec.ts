import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpEmployCRUDComponent } from './http-employ-crud.component';

describe('HttpEmployCRUDComponent', () => {
  let component: HttpEmployCRUDComponent;
  let fixture: ComponentFixture<HttpEmployCRUDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpEmployCRUDComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpEmployCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
