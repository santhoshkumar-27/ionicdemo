import { createAction, props } from '@ngrx/store';

export const recoveryPassword = createAction('[Recover password]');
export const recoveryPasswordSucces = createAction('[Recover password] successfull');
export const recoveryPasswordFail = createAction('[Recovery password] fail', props<{errors: any}>());
