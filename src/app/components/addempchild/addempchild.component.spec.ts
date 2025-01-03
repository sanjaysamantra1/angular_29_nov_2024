import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddempchildComponent } from './addempchild.component';

describe('AddempchildComponent', () => {
  let component: AddempchildComponent;
  let fixture: ComponentFixture<AddempchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddempchildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddempchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
