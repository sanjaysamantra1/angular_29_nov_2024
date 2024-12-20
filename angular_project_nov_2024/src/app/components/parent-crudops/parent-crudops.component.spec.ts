import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentCrudopsComponent } from './parent-crudops.component';

describe('ParentCrudopsComponent', () => {
  let component: ParentCrudopsComponent;
  let fixture: ComponentFixture<ParentCrudopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentCrudopsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentCrudopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
