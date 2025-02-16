import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MemberServiceService } from "../../services/member-service.service";

@Component({
  selector: "app-member-details",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./member-details.component.html",
  styleUrl: "./member-details.component.css",
})
export class MemberDetailsComponent {
  member: any = [];

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.route.params.subscribe((param: any) => {
      this.http
        .get(`http://localhost:3000/members/${param.memberId}`)
        .subscribe((response) => {
          console.log(response);
          this.member = response;
        });
      console.log(param.memberId);
    });
  }
}
