import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserInfo } from 'src/app/models/user-info';
import { HintsService } from 'src/app/services/hints.service';
import { Hint } from 'src/app/models/hint';
import { UsersService } from 'src/app/services/users.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public uinfo: UserInfo;

  public profileImageUrl: SafeUrl;
  public hintsForAuthor: Hint[];

  constructor(
    private users: UsersService,
    private hints: HintsService,
    private sanitizer: DomSanitizer
  ) {
    this.uinfo = users.getUserFromLocalStorage();
  }

  async ngOnInit() {
    const user = this.users.getUserFromLocalStorage();

    try {
      this.hintsForAuthor = await this.hints.getByAuthor(user.name).toPromise();
      await this.fetchUserImage();
    } catch (ex) {
      console.log(ex);
    }
  }

  async fetchUserImage() {
    try {
      const blob = await this.users
        .getUserImage(this.uinfo.user_id)
        .toPromise();

      const unsafeImageUrl = URL.createObjectURL(blob);
      this.profileImageUrl = this.sanitizer.bypassSecurityTrustUrl(
        unsafeImageUrl
      );
    } catch (ex) {
      console.log(ex);
    }
  }
}
