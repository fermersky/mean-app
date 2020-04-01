import {
  Component,
  OnInit,
  AfterContentInit,
  ContentChild
} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserInfo } from 'src/app/models/user-info';
import { HintsService } from 'src/app/services/hints.service';
import { Hint } from 'src/app/models/hint';
import { UsersService } from 'src/app/services/users.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { HintsListComponent } from '../hints-list/hints-list.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public uinfo: UserInfo;

  constructor(private users: UsersService) {
    this.uinfo = users.getUserFromLocalStorage();
  }

  ngOnInit(): void {}
}
