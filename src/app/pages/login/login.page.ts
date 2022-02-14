import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { loginForm } from './login.page.form';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form: FormGroup;
  submitted: boolean;
  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.form = new loginForm(this.fb).createForm();
  }

  homePage() {
    this.router.navigate(['home']);
  }
  registerPage() {
    this.router.navigate(['register']);
  }
  passwordPage() {
    this.router.navigate(['forgot']);
  }
  onSubmit() {
    this.submitted = true;
    if(this.form.valid) {
      this.homePage();
    }
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  get f() {
    return this.form.controls ;
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  get y() {
    return this.form as FormGroup;
  }
}
