/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable eol-last */
import { createReducer, on } from "@ngrx/store";
import { show, hide } from "./loading.action";
import { loadingStateI } from "./loadingState";

const initialState: loadingStateI = {
    show: false
};
const reducer = createReducer(
    initialState,
    on(show, () => {
        return {show: true};
    }),
    on(hide, () => {
        return {show: false};
    })
);
export function loadingReducer( state: loadingStateI, action) {
    return reducer(state, action);
};