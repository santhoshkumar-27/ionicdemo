import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ForgotForm } from './forgot.form.page';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {
  form: FormGroup;
  submitted: boolean;
  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = new ForgotForm(this.fb).createForgotForm();
  }
  onSubmit() {
    this.submitted = true;
    if(this.form.valid) {
      this.router.navigate(['createpassword']);
    }
  }
}
