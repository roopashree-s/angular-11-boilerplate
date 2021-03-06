import { Injectable } from "@angular/core";
import { of } from "rxjs";

import { SpinnerService, UserProfileService } from "../../app/core";

@Injectable()
export class LoginService {
  constructor(
    private spinnerService: SpinnerService,
    private userProfileService: UserProfileService
  ) {}

  login() {
    return of(true)
      // .do(_ => this.spinnerService.show())
      // .delay(1000)
      // .do(this.toggleLogState.bind(this));
    // .do((val: boolean) => {
    //   this.isLoggedIn = true;
    //   console.log(this.isLoggedIn);
    // });
  }

  logout() {
    this.toggleLogState(false);
  }

  private toggleLogState(val: boolean) {
    this.userProfileService.isLoggedIn = val;
    this.spinnerService.hide();
  }
}
