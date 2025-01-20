import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWithModelComponent } from './user-with-model.component';

describe('UserWithModelComponent', () => {
  let component: UserWithModelComponent;
  let fixture: ComponentFixture<UserWithModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserWithModelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserWithModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
