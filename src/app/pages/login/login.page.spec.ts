import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let router: Router;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPage ],
      imports: [
      IonicModule.forRoot(),
      AppRoutingModule,
      ReactiveFormsModule
    ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
  it('should create the form on init', () => {
    component.ngOnInit();
    expect(component.form).not.toBeUndefined();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should go to the home page', ()=> {
    spyOn(router, 'navigate');
    component.homePage();
    expect(router.navigate).toHaveBeenCalledWith(['home']);
  });
  it('should go to the register page', () => {
    spyOn(router, 'navigate');
    component.registerPage();
    expect(router.navigate).toHaveBeenCalledWith(['register']);
  });
  it('should go to the forgot password page', () => {
    spyOn(router, 'navigate');
    component.passwordPage();
    expect(router.navigate).toHaveBeenCalledWith(['forgot']);
  });
});
