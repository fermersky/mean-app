import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { HintsService } from 'src/app/services/hints.service';
import { UsersService } from 'src/app/services/users.service';
import { Hint } from 'src/app/models/hint';
import { UserInfo } from 'src/app/models/user-info';

@Component({
  selector: 'app-hints-list',
  templateUrl: './hints-list.component.html',
  styleUrls: ['./hints-list.component.css']
})
export class HintsListComponent implements OnInit {
  public uinfo: UserInfo;
  public loading = false;
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
      this.loading = true;

      this.hintsForAuthor = await this.hints.getByAuthor(user.name).toPromise();
      await this.fetchUserImage();

      this.loading = false;
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
