import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Store, StoreModule } from '@ngrx/store';
import { AppStateI } from 'src/store/AppState';
import { hide, show } from 'src/store/loadingState/loading.action';
import { loadingReducer } from 'src/store/loadingState/loading.reducer';

import { LoaderCComponent } from './loader-c.component';

describe('LoaderCComponent', () => {
  let component: LoaderCComponent;
  let fixture: ComponentFixture<LoaderCComponent>;
  let store: Store<AppStateI>;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaderCComponent ],
      imports: [
        IonicModule.forRoot(),
        StoreModule.forRoot([]),
        StoreModule.forFeature('loading', loadingReducer)
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoaderCComponent);
    store = TestBed.get(Store);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should hide loading component when it is not loading', () => {
    const compiled = fixture.nativeElement;
    store.dispatch(hide());
    fixture.detectChanges();
    expect(compiled.querySelector('.backdrop')).toBeNull();
  });
  it('should show loading component when it is loading', () => {
    const compiled = fixture.nativeElement;
    store.dispatch(show());
    fixture.detectChanges();
    expect(compiled.querySelector('.backdrop')).not.toBeNull();
  });
});
