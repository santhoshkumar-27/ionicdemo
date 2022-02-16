import { StoreModule } from '@ngrx/store';
import { loadingReducer } from './loadingState/loading.reducer';
import { loginReducer } from './login/login.reducer';

// eslint-disable-next-line @typescript-eslint/naming-convention
export const AppStateStoreModule = [
    StoreModule.forRoot([]),
    StoreModule.forFeature('loading', loadingReducer),
    StoreModule.forFeature('login', loginReducer)
];
