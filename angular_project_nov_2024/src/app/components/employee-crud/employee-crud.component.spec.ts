import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { EmployeeCRUDComponent } from './employee-crud.component';
import Swal from 'sweetalert2';

describe('EmployeeCRUDComponent', () => {
  let component: EmployeeCRUDComponent;
  let fixture: ComponentFixture<EmployeeCRUDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeCRUDComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});