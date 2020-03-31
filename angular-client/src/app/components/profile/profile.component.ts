import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserInfo } from 'src/app/models/user-info';
import { HintsService } from 'src/app/services/hints.service';
import { Hint } from 'src/app/models/hint';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public uinfo: UserInfo;
  public hintsForAuthor: Hint[];

  constructor(private auth: AuthService, private hints: HintsService) {
    this.uinfo = auth.getUserFromLocalStorage();
  }

  async ngOnInit() {
    const user = this.auth.getUserFromLocalStorage();

    try {
      this.hintsForAuthor = await this.hints.getByAuthor(user.name).toPromise();
    } catch (ex) {
      console.log(ex);
    }
  }
}
