import { TestBed } from "@angular/core/testing";

import { MemberServiceService } from "./member-service.service";

describe("memberServiceService", () => {
  let service: MemberServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemberServiceService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
