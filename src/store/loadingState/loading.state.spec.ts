/* eslint-disable @typescript-eslint/quotes */
import { createAction } from "@ngrx/store";
import { hide, show } from "./loading.action";
import { loadingReducer } from "./loading.reducer";
import { loadingStateI } from "./loadingState";

describe('loading state', () => {
    let initialState: loadingStateI;
    let newState;
    it('show', () => {
        initialState = {show: false};
        newState = loadingReducer(initialState, show());
        expect(newState).toEqual({show: true});
    });

    it('hide', () => {
        initialState = {show: true};
        newState = loadingReducer(initialState, hide());
        expect(newState).toEqual({show: false});
    });
    it('should keep the state unchange, even unkown action', () => {
        initialState = {show: true};
        const action = createAction('UNKOWN');
        newState = loadingReducer(initialState, action);
        expect(newState).toEqual({show: false});
    });
});
