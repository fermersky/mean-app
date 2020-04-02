import { Component, OnInit, Input } from '@angular/core';
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
  @Input()
  public author: string;

  public uinfo: UserInfo;

  public loading = false;
  public profileImageUrl: SafeUrl;
  public hintsForAuthor: Hint[];

  constructor(
    private users: UsersService,
    private hints: HintsService,
    private sanitizer: DomSanitizer
  ) {}

  async ngOnInit() {
    try {
      this.loading = true;

      if (this.author) {
        this.uinfo = await this.users.getUserByName(this.author).toPromise();
      } else {
        this.uinfo = this.users.getUserFromLocalStorage();
      }

      this.hintsForAuthor = await this.hints
        .getByAuthor(this.uinfo.name)
        .toPromise();
      await this.fetchUserImage();
    } catch (ex) {
      console.log(ex);
    }

    this.loading = false;
  }

  async fetchUserImage() {
    try {
      const blob = await this.users.getUserImage(this.uinfo._id).toPromise();

      const unsafeImageUrl = URL.createObjectURL(blob);
      this.profileImageUrl = this.sanitizer.bypassSecurityTrustUrl(
        unsafeImageUrl
      );
    } catch (ex) {
      console.log(ex);
    }
  }
}
