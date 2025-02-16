import { Component } from "@angular/core";
import { MemberServiceService } from "../../services/member-service.service";
import { FetchUserComponent } from "../fetch-user/fetch-user.component";
import { NgxPaginationModule } from "ngx-pagination";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
@Component({
  selector: "app-member",
  standalone: true,
  imports: [
    NgxPaginationModule,
    FetchUserComponent,
    FormsModule,
    HttpClientModule,
  ],
  templateUrl: "./member.component.html",
  styleUrl: "./member.component.css",
})
export class MemberComponent {
  members: any;
  loadingFlag: boolean = false;
  flag: boolean = true;
  selectFlag: boolean = false;
  selectedMember: any = "";
  memberId: number = 0;
  memberName: string = "";
  memberSalary: number = 0;
  memberGender: string = "";
  updatememberObject = Object.create(null);
  updatememberId: number = 0;
  pageNumber: any;

  constructor(private memberService: MemberServiceService) {}
  ngOnInit() {
    if (this.members === undefined) {
      this.loadingFlag = !this.loadingFlag;
      this.getMembers();
    }
  }

  getMembers() {
    this.memberService.get().subscribe((data: any) => {
      this.members = data;
    });
  }

  onClickChange() {
    return (this.flag = !this.flag);
  }
  getCurrentMember(member: any) {
    this.selectFlag = !this.selectFlag;
  }

  deleteMember(member: any) {
    this.memberService.deletemember(member.id).subscribe((data) => {
      this.getMembers();
    });
  }

  addNewMember(memberObject: any) {
    this.memberService.savemember(memberObject).subscribe((data) => {
      console.log(data);
      this.getMembers();
    });
    this.getMembers();
  }
  getMemberToUpdate(member: any) {
    console.log("Update ", member);
    this.updatememberId = member.id;
    this.memberName = member.name;
    this.memberSalary = member.sal;
    this.memberGender = member.gender;
    console.log(this.memberName);
  }
  updateNewMember() {
    this.updatememberObject.name = this.memberName;
    this.updatememberObject.sal = this.memberSalary;
    this.updatememberObject.gender = this.memberGender;
    this.memberService
      .updatemember(this.updatememberId, this.updatememberObject)
      .subscribe((data) => {
        console.log(data);
        this.getMembers();
      });
  }
}
