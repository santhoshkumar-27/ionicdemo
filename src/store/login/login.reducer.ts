/* eslint-disable arrow-body-style */
import { createReducer, on } from '@ngrx/store';
import { AppInitialState } from '../AppInitialState';
import { recoveryPassword, recoveryPasswordFail, recoveryPasswordSucces } from './login.action';
import { loginStateI } from './loginstate';

const initialState: loginStateI = AppInitialState.login;

const reducerlogin = createReducer(
    initialState,
    on(recoveryPassword, (currentState: any) => {
        return {
            ...currentState,
            error: null,
            isRecoveredPassword : false,
            isRecoveringPassword: true
        };
    }),
    on(recoveryPasswordSucces, (currentState: any) => {
        return {
            ...currentState,
            error: null,
            isRecoveredPassword: true,
            isRecoveringPassword: false
        };
    }),
    on(recoveryPasswordFail, (currentState: any, _action) => {
        return {
            ...currentState,
            error: _action.errors,
        };
    })
);
// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function loginReducer(state: loginStateI, action) {
    return reducerlogin(state, action);
};
