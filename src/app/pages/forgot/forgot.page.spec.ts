import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Store, StoreModule } from '@ngrx/store';
import { AppStateI } from 'src/store/AppState';
import { loadingReducer } from 'src/store/loadingState/loading.reducer';
import { loginReducer } from 'src/store/login/login.reducer';

import { ForgotPage } from './forgot.page';

describe('ForgotPage', () => {
  let component: ForgotPage;
  let fixture: ComponentFixture<ForgotPage>;
  let page;
  let store: Store<AppStateI>;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotPage ],
      imports: [
        IonicModule.forRoot(),
        StoreModule.forRoot([]),
        StoreModule.forFeature('loading', loadingReducer),
        StoreModule.forFeature('login', loginReducer)
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ForgotPage);
    store = TestBed.get(Store);
    component = fixture.componentInstance;
    page = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create the component',() => {
    // expect(true).toBeFalsy();
    fixture.detectChanges();
    component.form.get('veriCode').setValue('this is example');
    page.querySelector('#forgotButton').click();
    store.select('login').subscribe(loginState => {
      expect(loginState.isRecoveringPassword).toBeTruthy();
    });
  });
});
