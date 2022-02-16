import { AppInitialState } from '../AppInitialState';
import { recoveryPassword, recoveryPasswordFail, recoveryPasswordSucces } from './login.action';
import { loginReducer } from './login.reducer';
import { loginStateI } from './loginstate';

describe('login store', () => {
    it('recoverpassword', () => {
        const login: loginStateI = AppInitialState.login;
        const newState = loginReducer(login, recoveryPassword());
        expect(newState).toEqual({
            ...login,
            error: null,
            isRecoverdPassword: false,
            isRocoveringPassword: false
        });
    });
    it('recoverpasswordSuccess', () => {
        const login: loginStateI = AppInitialState.login;
        const newState = loginReducer(login, recoveryPasswordSucces());
        expect(newState).toEqual({
            ...login,
            error: null,
            isRecoverdPassword: true,
            isRocoveringPassword: false
        });
    });
    it('recoverpasswordFail', () => {
        const login: loginStateI = AppInitialState.login;
        const newState = loginReducer(login, recoveryPasswordFail({errors}));
        expect(newState).toEqual({
            ...login,
            errors,
            isRecoverdPassword: false,
            isRocoveringPassword: false
        });
    });
});
