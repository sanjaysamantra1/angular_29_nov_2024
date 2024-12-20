import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudopsComponent } from './crudops.component';

describe('CrudopsComponent', () => {
  let component: CrudopsComponent;
  let fixture: ComponentFixture<CrudopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudopsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
