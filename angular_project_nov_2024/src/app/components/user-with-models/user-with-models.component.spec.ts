import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWithModelsComponent } from './user-with-models.component';

describe('UserWithModelsComponent', () => {
  let component: UserWithModelsComponent;
  let fixture: ComponentFixture<UserWithModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserWithModelsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserWithModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
