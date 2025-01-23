import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [
  FormsModule
  ],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  users: any = [];
  isLoading = true;
  formData: { id?: number; name: string; email: string } = { name: '', email: '' };
  isEditMode = false;

  constructor(private userService: UsersService) {
  }
  
  ngOnInit(): void {
    this.fetchUsers();  
  }

  fetchUsers(): void {
    this.isLoading = true;
    this.userService.getUsers().subscribe((response) => {
      this.users = response;
      this.isLoading = false;
    });
  }

  addUser(): void {
    if (this.isEditMode && this.formData.id !== undefined) {
      this.userService.updateUser(this.formData.id, this.formData).subscribe(() => {
        this.fetchUsers();
        this.resetForm();
      });
    } else {
      this.userService.addUser(this.formData).subscribe(() => {
        this.fetchUsers();
        this.resetForm();
      });
    }
  }

  deleteUser(userId: number): void {
    this.userService.deleteUser(userId).subscribe(() => this.fetchUsers());
  }

  editUser(user: any): void {
    this.isEditMode = true;
    this.formData = {...user};
  }

  resetForm(): void {
    this.isEditMode = false;
    this.formData = { name: '', email: '' };
  }
}
