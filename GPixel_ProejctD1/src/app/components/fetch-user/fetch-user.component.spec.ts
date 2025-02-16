import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchUserComponent } from './fetch-user.component';

describe('FetchUserComponent', () => {
  let component: FetchUserComponent;
  let fixture: ComponentFixture<FetchUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FetchUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FetchUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
