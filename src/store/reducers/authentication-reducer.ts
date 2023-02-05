import type { Reducer } from 'redux';

import { SET_TOKEN, REMOVE_TOKEN, SET_USER, SET_IS_AUTHENTICATED } from '../actions/authentication-action';

const initialState = {
    token: '',
    user: '',
    isAuthenticated: false,
};

const reducer: Reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_TOKEN:
            return { ...state, token: action.token, isAuthenticated: true };
        case REMOVE_TOKEN:
            return {};
        case SET_USER:
            return { ...state, ...action.user };
        case SET_IS_AUTHENTICATED:
            return { ...state, isAuthenticated: action.isAuthenticated };
        default:
            return state;
    }
}

export default reducer;