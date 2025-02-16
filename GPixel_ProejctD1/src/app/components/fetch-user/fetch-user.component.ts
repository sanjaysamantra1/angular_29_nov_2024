import { CommonModule } from "@angular/common";
import { Component, EventEmitter } from "@angular/core";
import { FormsModule } from "@angular/forms";
import Swal from "sweetalert2";

@Component({
  selector: "app-fetch-user",
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: "./fetch-user.component.html",
  styleUrl: "./fetch-user.component.css",
})
export class FetchUserComponent {
  modalDisplayStyle = "none";
  userName: string = "";
  userSalary: number = 0;
  userGender: string = "";

  userObject = Object.create(null);
  addUserEvent = new EventEmitter();

  addNewUser() {
    if (this.userName === null || this.userName === "") {
      Swal.fire({
        icon: "error",
        text: "Data entered is in Wrong Format! Please check the data!!",
      });
    } else {
      this.userObject.name = this.userName;
      this.userObject.sal = this.userSalary;
      this.userObject.gender = this.userGender;

      console.log(this.userObject);

      this.addUserEvent.emit(this.userObject);
      this.userGender = "";
      this.userName = "";
      this.userSalary = 0;
    }
  }
  displayModal() {
    this.modalDisplayStyle = "block";
  }
  hideModal() {
    this.modalDisplayStyle = "none";
  }
}
