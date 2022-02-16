import { loadingStateI } from './loadingState/loadingState';
import { loginStateI } from './login/loginstate';

export interface AppStateI  {
    loading: loadingStateI;
    login: loginStateI;
};
