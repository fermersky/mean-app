import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ValidatorFn,
  ValidationErrors
} from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;

  public name: FormControl;
  public email: FormControl;
  public password: FormControl;
  public repeatPassword: FormControl;

  constructor(private users: UsersService) {
    this.createFormControls();
    this.createForm();
    this.bindCustomValidators();
  }

  ngOnInit() {}

  createFormControls() {
    this.name = new FormControl('', [
      Validators.required,
      Validators.min(4),
      Validators.max(20)
    ]);
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(30)
    ]);
    this.repeatPassword = new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(30)
    ]);
  }

  createForm() {
    this.registerForm = new FormGroup({
      name: this.name,
      email: this.email,
      password: this.password,
      repeatPassword: this.repeatPassword
    });
  }

  bindCustomValidators() {
    this.registerForm.setValidators(this.compare());
  }

  compare(): ValidatorFn {
    return (group: FormGroup): ValidationErrors => {
      const pwd = group.controls['password'];
      const repwd = group.controls['repeatPassword'];

      if (pwd.value !== repwd.value) {
        repwd.setErrors({ notEquivalent: true });
      } else {
        repwd.setErrors(null);
      }

      return;
    };
  }

  async register() {
    if (this.registerForm.valid) {
      const uinfo = this.registerForm.value;

      try {
        const resoponse = await this.users
          .register(uinfo.name, uinfo.email, uinfo.password)
          .toPromise();
        console.log(resoponse);
      } catch (ex) {
        console.log(ex);
      }
    }
  }
}
