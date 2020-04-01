import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { HintsService } from 'src/app/services/hints.service';
import { Hint } from 'src/app/models/hint';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-hint',
  templateUrl: './create-hint.component.html',
  styleUrls: ['./create-hint.component.css']
})
export class CreateHintComponent implements OnInit {
  public form: FormGroup;
  public title: FormControl;
  public tags: FormArray;

  constructor(
    private hints: HintsService,
    private user: UsersService,
    private router: Router
  ) {}

  createForm() {
    this.form = new FormGroup({
      title: this.title,
      tags: this.tags
    });
  }

  createFormControls() {
    this.title = new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(255)
    ]);

    this.tags = new FormArray([]);
  }

  createTagControl() {
    this.tags.push(
      new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30)
      ])
    );
  }

  removeTagControl(index) {
    this.tags.removeAt(index);
  }

  async postHint() {
    const uinfo = this.user.getUserFromLocalStorage();
    if (this.form.valid && uinfo) {
      const title = this.form.get('title').value;
      const tags = this.form.get('tags').value;
      const author = uinfo.name;
      const user_id = uinfo.user_id;

      try {
        await this.hints.postHint(title, tags, author, user_id).toPromise();

        this.router.navigate(['/profile/list']);
      } catch (ex) {
        console.log(ex);
      }
    }
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();

    this.form.valueChanges.subscribe(v => console.log(v));
  }

  get tagsArray() {
    return this.tags.controls;
  }
}
