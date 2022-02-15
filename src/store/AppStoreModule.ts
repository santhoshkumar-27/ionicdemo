import { StoreModule } from '@ngrx/store';
import { loadingReducer } from './loadingState/loading.reducer';

// eslint-disable-next-line @typescript-eslint/naming-convention
export const AppStateStoreModule = [
    StoreModule.forRoot([]),
    StoreModule.forFeature('loading', loadingReducer)
];
