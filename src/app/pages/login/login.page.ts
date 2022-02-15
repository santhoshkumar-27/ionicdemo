import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { hide, show } from 'src/store/loadingState/loading.action';
import { loginForm } from './login.page.form';
import { AppStateI } from '../../../store/AppState';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form: FormGroup;
  submitted: boolean;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private store: Store<AppStateI>
    ) { }

  ngOnInit() {
    this.form = new loginForm(this.fb).createForm();
  }
  onSubmit() {
    this.submitted = true;
    if(this.form.valid) {
      this.pageNavi('home');
    }
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  // get f() {
  //   return this.form.controls ;
  // }
  pageNavi( e: string){
    this.store.dispatch(show());

    setTimeout(() => {
      this.store.dispatch(hide());
      switch(e) {
        case 'forgot':
          this.router.navigate(['forgot']);
          break;
        case 'home':
          this.router.navigate(['home']);
          break;
        case 'register':
          this.router.navigate(['register']);
          break;
      }
    }, 1500);
  }
}
