import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudOpsComponent } from './crud-ops.component';

describe('CrudOpsComponent', () => {
  let component: CrudOpsComponent;
  let fixture: ComponentFixture<CrudOpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudOpsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrudOpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
