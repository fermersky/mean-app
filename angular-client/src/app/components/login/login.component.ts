import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { UserInfo } from 'src/app/models/user-info';
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

  public loginForm: FormGroup;
  public email: FormControl;
  public password: FormControl;

  constructor(
    private auth: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.createFormControls();
    this.createForm();
  }

  createForm() {
    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password
    });
  }

  createFormControls() {
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern(this.emailRegex)
    ]);

    this.password = new FormControl('', [Validators.required]);
  }

  openSnackBar(msg) {
    this.snackBar.open(msg, 'Got it!', {
      duration: 2000
    });
  }

  async signIn() {
    if (this.loginForm.valid) {
      const form = this.loginForm.value;

      try {
        const uinfo = await this.auth
          .httpLogin(form.email, form.password)
          .toPromise();
        this.auth.signIn(uinfo);

        this.router.navigate(['profile']);
      } catch (ex) {
        this.openSnackBar(ex.error.message);
      }
    } else {
      this.openSnackBar('Validation error(s) detected!');
    }
  }
}
