import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class MemberServiceService {
  members: any;
  memberObject: any = [];
  members_url = "http://localhost:3000/members";
  constructor(private httpClient: HttpClient) {}
  get() {
    return this.httpClient.get(this.members_url);
  }
  getmembersFromEndpoint() {
    return this.httpClient.get(this.members_url);
  }

  getmembers() {
    this.getmembersFromEndpoint();
    return this.members;
  }
  savemember(memberDetails: any) {
    return this.httpClient.post(this.members_url, memberDetails);
  }
  updatemember(memberId: number, updateObject: any) {
    let update_url = this.members_url + "/" + memberId;
    return this.httpClient.put(update_url, updateObject);
  }
  deletemember(memberId: number) {
    let delete_url = this.members_url + "/" + memberId;
    return this.httpClient.delete(delete_url);
  }
}
