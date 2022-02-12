import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let router: Router;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    router = TestBed.get(router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should go to pickcall', () => {
    spyOn(router, 'navigate');
    component.goToPickCall();
    expect(router.navigate).toHaveBeenCalledWith(['pickup-call']);
  });
  it('should go to mypickupcall', () => {
    spyOn(router, 'navigate');
    component.goToMyPickCall();
    expect(router.navigate).toHaveBeenCalledWith(['mypickupcall']);
  });
});
