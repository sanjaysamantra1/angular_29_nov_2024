import { Component } from '@angular/core';
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
export class UserComponent{
  users: any = [];
  isLoading = true;
  formData: { id?: number; name: string; email: string } = { name: '', email: '' };
  editData = false;

  constructor(private userService: UsersService) {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.isLoading = true;
    this.userService.fetchAllUsers().subscribe((response) => {
      this.users = response;
      this.isLoading = false;
    });
  }

  addUser(): void {
    if (this.editData && this.formData.id !== undefined) {
      this.userService.updateUser(this.formData.id, this.formData).subscribe(() => {
        this.fetchUsers();
        this.formChangeMode();
      });
    } else {
      this.userService.addUser(this.formData).subscribe(() => {
        this.fetchUsers();
        this.formChangeMode();
      });
    }
  }

  deleteUser(userId: number): void {
    console.log('Deleting user with ID:', userId); 
    this.userService.deleteUser(userId).subscribe(() => this.fetchUsers());
  }
  

  editUser(user: any): void {
    this.editData = true;
    // this.formData.id = user.id;
    this.formData.name = user.name;
    this.formData.email = user.email;
  }
  

  formChangeMode(): void {
    this.editData = false;
    this.formData = { name: '', email: '' };
  }
}