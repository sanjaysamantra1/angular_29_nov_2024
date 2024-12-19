import { ComponentFixture, TestBed } from '@angular/core/testing';

import {ArraylistComponent} from './arraylist.component';

describe('ArraylistComponent', () => {
  let component: ArraylistComponent;
  let fixture: ComponentFixture<ArraylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArraylistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArraylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
