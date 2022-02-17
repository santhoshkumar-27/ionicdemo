import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppStateI } from 'src/store/AppState';
import { hide, show } from 'src/store/loadingState/loading.action';
import { recoveryPassword } from 'src/store/login/login.action';
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
    private router: Router,
    private store: Store<AppStateI>
  ) { }

  ngOnInit() {
    this.form = new ForgotForm(this.fb).createForgotForm();
  }
  onSubmit() {
    this.submitted = true;
    if(this.form.valid) {
      // this.router.navigate(['createpassword']);
      this.pageNavi();
    }
  }
  pageNavi(){
    this.store.dispatch(show());

    setTimeout(() => {
      this.store.dispatch(hide());
      this.router.navigate(['createpassword']);
    }, 1500);
  }
  forgotPassword() {
    console.log('this is state', this.store.dispatch(recoveryPassword()));
    this.store.dispatch(recoveryPassword());
  }
}
