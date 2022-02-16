/* eslint-disable @typescript-eslint/naming-convention */
// eslint-disable-next-line @typescript-eslint/quotes
import { AppStateI } from "./AppState";

export const AppInitialState: AppStateI = {
    loading: {
        show: false,
    },
    login: {
        error: null,
        isLoggedIn: false,
        isLoggingIn: false,
        isRecoveredPassword: false,
        isRecoveringPassword: false,
        user: null
    }
};
